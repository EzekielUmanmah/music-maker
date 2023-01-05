import { useContext, useState } from 'react';
import { Typography, Table, Form, message } from 'antd';
import { Container } from './styles';
import { AppContext } from '../../App';
import columns from './columns';
import Edit from './Edit';
import axios from 'axios';

export default function ClipTable() {
  const [state, setState] = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [currClip, setCurrClip] = useState(null);
  const [form] = Form.useForm();
  const user = JSON.parse(localStorage.getItem('profile'));

  columns.forEach((col) => {
    if (col.dataIndex === 'edit') {
      col.render = (_, clip) => {
        if (!clip) return null;

        return (
          <Typography.Link onClick={() => editClip(clip)}>Edit</Typography.Link>
        );
      };
    }
    if (col.dataIndex === 'delete') {
      col.render = (_, clip) => {
        if (!clip) return null;

        return (
          <Typography.Link onClick={() => deleteClip(clip)}>
            Delete
          </Typography.Link>
        );
      };
    }
  });

  const save = (val) => {
    // console.log('update: ', val);
    const update = { ...currClip, ...val };
    // console.log('save update obj: ', update);
    axios
      .put('http://localhost:4000/clips', update)
      .then(() => {
        message.success('Clip Updated!');
        getClips();
      })
      .catch((err) => console.log('Save Edit Handler: ', err));

    setIsEdit(false);
    setCurrClip(null);
  };

  const editClip = (clip) => {
    setCurrClip(clip);
    form.setFieldsValue({ ...clip });
    setIsEdit(true);
  };

  const deleteClip = (clip) => {
    axios
      .delete(`http://localhost:4000/clips/${clip.clip_id}`)
      .then(() => {
        getClips();
        message.success('Clip Deleted!');
      })
      .catch((err) => console.log('deleteClip handler err: ', err));
  };

  const getClips = () => {
    axios
      .get(`http://localhost:4000/clips/${user.user_id}`)
      .then((res) => {
        setState((state) => ({
          ...state,
          clips: res.data,
        }));
      })
      .catch((err) => console.log('getClips err: ', err));
  };

  return (
    <Container>
      <Table columns={columns} dataSource={state.clips} />
      <Edit
        isEdit={isEdit}
        form={form}
        cancel={() => setIsEdit(false)}
        save={save}
      />
    </Container>
  );
}

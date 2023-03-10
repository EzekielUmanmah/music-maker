import { useContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Modal, Form, Input, message } from 'antd';
import axios from 'axios';

import { Button, Container, Output, ContainerBtns } from './styles';
import '../../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPowerOff,
  faMicrophone,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../App';

export default function Display() {
  const [state, setState] = useContext(AppContext);
  const { str, status, isRecord } = state;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleSave = (vals) => {
    const data = {
      ...vals,
      clip: state.currClip && state.currClip.join(','),
      user_id: user.user_id,
    };
    axios
      .post('http://localhost:4000/clips', data)
      .then(() => {
        message.success('Clip Saved!');
        setState((state) => ({
          ...state,
          isRecord: false,
          currClip: [],
          str: '',
        }));
        getClips();
      })
      .catch((err) => console.log(err));

    setShowModal(false);
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
      <h1 style={{ color: 'white' }}>MusicMaker</h1>
      <Output
        className='fade'
        style={!status ? { background: '#E0E0E0' } : null}
      >
        {status ? str : null}
      </Output>
      <ContainerBtns>
        <CSSTransition classNames='power' appear in={!status} timeout={500}>
          <Button
            onClick={() =>
              setState((state) => ({
                ...state,
                status: !state.status,
                isRecord: false,
              }))
            }
          >
            <FontAwesomeIcon className='power-btn' icon={faPowerOff} />
          </Button>
        </CSSTransition>

        {isRecord && (
          <Button onClick={() => setShowModal((prev) => !prev)}>
            <FontAwesomeIcon className='save-btn' icon={faSave} />
          </Button>
        )}

        <CSSTransition classNames='record' appear in={!isRecord} timeout={500}>
          <Button
            disabled={!status}
            onClick={() =>
              setState((state) => ({
                ...state,
                isRecord: !isRecord,
                str: '',
                currClip: [],
              }))
            }
          >
            <FontAwesomeIcon className='record-btn' icon={faMicrophone} />
          </Button>
        </CSSTransition>
      </ContainerBtns>

      <Modal
        title='Save your clip?'
        open={showModal}
        onOk={() => {
          form.validateFields().then((vals) => handleSave(vals));
        }}
        onCancel={() => setShowModal(false)}
      >
        <Form.Item>{state.currClip && state.currClip.join(', ')}</Form.Item>
        <Form form={form} name='form-in-modal'>
          <Form.Item
            name='title'
            label='Clip Title'
            rules={[
              {
                required: true,
                message: 'Please input the clip title!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Container>
  );
}

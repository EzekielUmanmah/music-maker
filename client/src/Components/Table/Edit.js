import { Form, Input, Modal } from 'antd';

export default function Edit({ isEdit, form, cancel, save }) {
  return (
    <Modal
      title='Edit Clip'
      onCancel={cancel}
      onOk={() => {
        form
          .validateFields()
          .then((update) => save(update))
          .catch((err) => console.log('Edit Failed: ', err));
      }}
      open={isEdit}
    >
      <Form form={form} name='edit_in_modal'>
        <Form.Item name='title' label='Title' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

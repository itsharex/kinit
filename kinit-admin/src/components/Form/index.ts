import Form from './src/Form.vue'
import { ElForm } from 'element-plus'

export interface FormExpose {
  setValues: (data: Recordable) => void
  setValue: (key: string, value: any) => void
  setProps: (props: Recordable) => void
  delSchema: (field: string) => void
  addSchema: (formSchema: FormSchema, index?: number) => void
  setSchema: (schemaProps: FormSetPropsType[]) => void
  formModel: Recordable
  getElFormRef: () => ComponentRef<typeof ElForm>
}

export { Form }

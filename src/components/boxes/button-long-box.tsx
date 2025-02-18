import { PlusCircleOutlined } from '@ant-design/icons'


export function ButtonLongBox({styles, setOpenResponsive, text}) {
  return (
    <div style={styles.addButton} onClick={() => setOpenResponsive(true)}>
        <PlusCircleOutlined style={styles.icon} />
        <p>Add new service</p>
      </div>
  )
}

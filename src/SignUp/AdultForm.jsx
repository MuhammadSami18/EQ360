import FormEmail from "../Form/FormEmail";
import FormName from "../Form/FormName";
import ConformPassword from "../Form/ConformPassword"

const AdultForm = () => {
  // let alert=''
  // if (props.password) {
  //   props.password===props.cpass?'':alert="Password don't match"
  // }
  return (
    <>
      <FormName /*fname={props.fname} lname={props.lname} setLname={props.setLname} setFname={props.setFname} */ />
      <FormEmail /*mail={props.mail} password={props.password} setMail={props.setMail} setPass={props.setPass}*/ />
      <ConformPassword /*cpass={props.cpass} setCpass={props.setCpass} alert={alert}*/ />
    </>
  )
}

export default AdultForm

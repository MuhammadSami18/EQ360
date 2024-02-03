import Country from "./Country";
import FormEmail from "./FormEmail";
import FormName from "./FormName";
import SchoolInput from "./SchoolInput";
import ConformPassword from "./ConformPassword";

const EducatorInput = ({role,roleLable}) => {
    return (
        <>
            <Country />
            <SchoolInput role={role} roleLable={roleLable} />
            <FormName />
            <FormEmail email="“Enter a .edu, .org, or .gov School Email; Or Contact Us” [can contact us be a link to the strut contact us page]" pass="Your password must be longer than 8 characters and contain an uppercase,lowercase, special character and number" />
            <ConformPassword />
        </>
    )
}

export default EducatorInput

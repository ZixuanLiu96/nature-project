import NewForm from "../components/NewForm";

function EditPage() {
  const pageTitle = "Edit your scenery";
  const bg = "/images/antelope.jpg";
  function handleForm(e) {
    e.preventDefault();
  }
  return <NewForm pageTitle={pageTitle} onHandleForm={handleForm} bg={bg} />;
}

export default EditPage;

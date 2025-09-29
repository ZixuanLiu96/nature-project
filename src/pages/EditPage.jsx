import NewForm from "../components/NewForm";

function EditPage() {
  const pageTitle = "Edit your scenery";
  const bg = "/images/antelope.jpg";
  function handleSubmit(values) {
    console.log("submitting...");
    console.log(values);
  }
  return <NewForm pageTitle={pageTitle} handleSubmit={handleSubmit} bg={bg} />;
}

export default EditPage;

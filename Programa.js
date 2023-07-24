class FormEngine {
    constructor() {}
  
    async render() {
      // Get the JSON schema from the API
      const response = await fetch("http://localhost:3000/formulario/Especialidad");
      const schema = await response.json();
  
      // Create a form element
      const form = document.createElement("form");
      form.classList.add("container");
  
      // Iterate over each property in the schema and create a form field for it
      for (const [key, value] of Object.entries(schema.properties)) {
        const formGroup = document.createElement("div");
        formGroup.classList.add("form-group");
        form.appendChild(formGroup);
  
        const label = document.createElement("label");
        label.innerText = key;
        formGroup.appendChild(label);
  
        const input = document.createElement("input");
        input.classList.add("form-control");
        input.name = key;
  
        if (value.type === "integer") {
          input.type = "number";
        } else if (value.type === "string") {
          input.type = "text";
        }
  
        formGroup.appendChild(input);
      }
  
      // Add a submit button to the form
      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.classList.add("btn", "btn-primary");
      submitButton.innerText = "Submit";
      form.appendChild(submitButton);
  
      // Add the form to the page
      document.body.appendChild(form);
    }
  }
  
  const formEngine = new FormEngine();
  formEngine.render();
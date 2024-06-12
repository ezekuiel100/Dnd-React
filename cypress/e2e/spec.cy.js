describe("template spec", () => {
  it("Drag and Drop", () => {
    cy.visit("http://localhost:5173/");

    const dataTransfer = new DataTransfer();

    // Dispara o evento dragstart no elemento arrastável
    cy.get("[data='draggable']").trigger("dragstart", {
      dataTransfer,
      force: true,
    });

    // Simula o movimento do mouse sobre o elemento de destino
    cy.get("[data='dropableArea']")
      .trigger("dragenter", {
        dataTransfer,
        force: true,
      })
      .trigger("dragover", {
        dataTransfer,
        force: true,
      });

    // Solta o elemento no alvo
    cy.get("[data='dropableArea']")
      .trigger("drop", {
        dataTransfer,
        force: true,
      })
      .trigger("dragend", {
        dataTransfer,
        force: true,
      });

    // Verifica se o elemento arrastado agora está dentro do elemento de destino
    cy.get("[data='dropableArea']").within(() => {
      cy.get("[data='draggable']").should("exist");
    });
  });
});

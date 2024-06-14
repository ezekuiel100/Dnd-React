describe("Drag and Drop", () => {
  it("should drag and drop an item", () => {
    cy.visit("http://localhost:5173/");

    const dataTransfer = new DataTransfer();

    const testCase = [
      { Draggable: "#draggable", DropableArea: "#dropableArea2" },
      { Draggable: "#draggable2", DropableArea: "#dropableArea3" },
      { Draggable: "#draggable3", DropableArea: "#dropableArea2" },
      { Draggable: "#draggable", DropableArea: "#dropableArea" },
      { Draggable: "#draggable2", DropableArea: "#dropableArea" },
      { Draggable: "#draggable3", DropableArea: "#dropableArea" },
      { Draggable: "#draggable", DropableArea: "#dropableArea2" },
      { Draggable: "#draggable2", DropableArea: "#dropableArea2" },
      { Draggable: "#draggable3", DropableArea: "#dropableArea3" },
      { Draggable: "#draggable", DropableArea: "#dropableArea3" },
      { Draggable: "#draggable2", DropableArea: "#dropableArea3" },
      { Draggable: "#draggable3", DropableArea: "#dropableArea3" },
    ];

    testCase.forEach(({ Draggable, DropableArea }) => {
      // Simula o evento dragstart no elemento arrastável
      cy.get(Draggable).trigger("mousedown", { which: 1 });
      cy.get(Draggable).trigger("dragstart", { dataTransfer });

      // Simula o movimento do mouse sobre o elemento de destino
      cy.get(DropableArea).trigger("dragenter", { dataTransfer });
      cy.get(DropableArea).trigger("dragover", { dataTransfer });

      // Solta o elemento no alvo
      cy.get(DropableArea).trigger("drop", { dataTransfer });
      cy.get(Draggable).trigger("dragend", { dataTransfer });
      cy.get(Draggable).trigger("mouseup");

      // Verifica se o elemento arrastado agora está dentro do elemento de destino
      cy.get(DropableArea).within(() => {
        cy.get(Draggable).should("exist");
      });
    });
  });
});

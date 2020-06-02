window.onload = () => {
  ejecutar("SELECT * FROM USUARIOS", (data) => {
    $("#jsGrid").jsGrid({
      width: "fit-content",
      height: "auto",
      inserting: true,
      editing: true,
      sorting: true,
      paging: true,
      data: data,
      fields: [
        { name: "ID", type: "text", width: 150, readOnly: true },
        { name: "Nombre", type: "text", width: 150 },
        { name: "Apellido Paterno", type: "text", width: 150 },
        { name: "Apellido Materno", type: "text", width: 150 },
        { type: "control" }
      ],
      onItemInserting: function (args) {
        let item = args.item;
        let query = `INSERT INTO USUARIOS VALUES(DEFAULT,'${item.Nombre}','${item['Apellido Paterno']}','${item['Apellido Materno']}')`;
        ejecutar(query, null);
      },
      onItemUpdated: function (args) {
        let item = args.item;
        let query = `UPDATE USUARIOS SET Nombre='${item.Nombre}',Apellido_P='${item['Apellido Paterno']}',Apellido_M='${item['Apellido Materno']}' WHERE ID=${item['ID']}`;
        ejecutar(query, null);
      },
      onItemDeleted: function (args) {
        let item = args.item;
        let query = `DELETE FROM USUARIOS WHERE ID=${item['ID']}`;
        ejecutar(query, null);
      },
      onItemInserted: recargar,
    });
  })
}
function ejecutar(query, success) {
  $.ajax({
    url: 'ejecutar.php',
    method: "post",
    success: success,
    data: { query: query }
  })
}

function recargar() {
  ejecutar("SELECT * FROM USUARIOS", (data) => {
    $("#jsGrid").jsGrid({
      data: data
    });
  });
}
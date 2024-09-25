import React, { useState } from "react";
import SlideBar from "../../CompTools/SlideBar";
import "../../Styles/IndexForm.css";

const OrderForm = ({}) => {
  const [code, setCode] = useState("");
  const [type, setType] = useState("Aceite de turbina");
  const [quantity, setQuantity] = useState("");

  const handleAdd = () => {
    if (quantity && type) {
      setQuantity("");
    }
  };

  return (
    <div>
      <h3>
        <a href="/PurchaseForm.tsx">ORDEN DE COMPRA</a> &gt; Registro
      </h3>
      <div>
        <label>CODIGO:</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div>
        <label>Tipo:</label>
        <label id="cantidad">Cantidad:</label> <br></br>
        <select
          id="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Aceite de turbina">Aceite de turbina</option>
          <option value="Otro tipo">Otro tipo</option>
          <option value="Otro tipo">Otro tipo2</option>
          {}
        </select>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />{" "}
        <br></br>
        <button name="agregar" onClick={handleAdd}>
          Agregar
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Oil</td>
            <td>Oil2</td>
            <td>
              <button>🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function OrderFormExport() {
  return (
    <SlideBar menuItem="Orden de Compra" ContentComp={OrderForm}></SlideBar>
  );
}

export default OrderFormExport;

import React from "react";
import Buttons from "./buttons.jsx";

// import { useId } from 'react'
export default function ToDoItem(props) {
  console.log(props.item);

  function complete(individualItem, i) {
    

    console.log(individualItem);
    individualItem.activeStatus = false;
    props.setItem([...props.item]);
  }

  let completedFilter = props.item.filter((x) => x.activeStatus == false);
  let activeFilter = props.item.filter((x) => x.activeStatus == true);

  if (props.page == "All") {
    return (
      <>
        <button
          onClick={() => {
            console.log(props.item.id)
            
            props.item.forEach((check) => (check.activeStatus = false));
            props.setItem([...props.item]);
          }}
        >
          check all
        </button>
        <button
          onClick={() => {
            props.item.forEach((check) => (check.activeStatus = true));
            props.setItem([...props.item]);
          }}
        >
          uncheck all
        </button>

        <div className="">
          {props.item.map((item, i) => (
            <div className="row" key={item.id}>
              <div className="col-1">
                <input
                  onClick={() => complete(item, i)}
                  checked={item.activeStatus ? false : true}
                  className="form-check-input me-3"
                  type="checkbox"
                  value=""
                  id={"flexCheckDefault"}
                />
              </div>
              <div className="col-1">
                <h5 id={item.id}>{item.input} </h5>
              </div>
              <div className="col-1">
                <button
                  onClick={() => {
                    item.activeStatus = false;
                    console.log(item.id);
                    props.setItem(props.item.filter((a) => a.id !== item.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (props.page === "Active") {
    return (
      <>
        <button
          onClick={() => {
            
            props.item.forEach((check) => (check.activeStatus = false));
            props.setItem([...props.item]);
          }}
        >
          check all
        </button>
        <button
          onClick={() => {
            props.item.forEach((check) => (check.activeStatus = true));
            props.setItem([...props.item]);
          }}
        >
          uncheck all
        </button>

        <div className="">
          {activeFilter.map((item, i) => (
            <div className="row" key={item.id}>
              <div className="col-1">
                <input
                  onClick={() => complete(item, i)}
                  className="form-check-input me-3"
                  type="checkbox"
                  value=""
                  id={"flexCheckDefault"}
                />
              </div>
              <div className="col-1">
                <h5 id={item.id}>{item.input} </h5>
              </div>
              <div className="col-1">
                <button
                  onClick={() => {
                    item.activeStatus = false;
                    console.log(item.id);
                    props.setItem(props.item.filter((a) => a.id !== item.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (props.page === "Completed") {
    return (
      <>
        <button
          onClick={(e) => {
            
            props.item.forEach((check) => (check.activeStatus = false));
            props.setItem([...props.item]);
          }}
        >
          check all
        </button>
        <button
          onClick={() => {
            props.item.forEach((check) => (check.activeStatus = true));
            props.setItem([...props.item]);
          }}
        >
          uncheck all
        </button>

        <div className="">
          {completedFilter.map((item, i) => (
            <div className="row" key={item.id}>
              <div className="col-1">
                <input
                  onClick={() => complete(item, i)}
                  checked={item.activeStatus ? false : true}
                  className="form-check-input me-3"
                  type="checkbox"
                  value=""
                  id={"flexCheckDefault" + i}
                />
              </div>
              <div className="col-1">
                <h5 id={item.id}>{item.input} </h5>
              </div>
              <div className="col-1">
                <button
                  onClick={() => {
                    item.activeStatus = false;
                    console.log(item.id);
                    props.setItem(props.item.filter((a) => a.id !== item.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

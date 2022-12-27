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
        className="btn btn-primary me-1"
          onClick={() => {
            console.log(props.item.id)
            
            props.item.forEach((check) => (check.activeStatus = false));
            props.setItem([...props.item]);
          }}
        >
          check all
        </button>
        <button
        className="btn btn-primary ms-1"
          onClick={() => {
            props.item.forEach((check) => (check.activeStatus = true));
            props.setItem([...props.item]);
          }}
        >
          uncheck all
        </button>

        <div className="row border border-3 my-2">
          {props.item.map((item, i) => (
            <div className="col-3 my-2 text-center" key={item.id}>
              <div className="">
                <input
                  onClick={() => complete(item, i)}
                  checked={item.activeStatus ? false : true}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={"flexCheckDefault"}
                />
              </div>
              <div className="">
                <h5 id={item.id}>{item.input} </h5>
              </div>
              <div className="">
                <button
                  className='btn btn-primary'
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
        className="btn btn-primary me-1"
          onClick={() => {
            
            props.item.forEach((check) => (check.activeStatus = false));
            props.setItem([...props.item]);
          }}
        >
          check all
        </button>
        <button
        className="btn btn-primary ms-1"
          onClick={() => {
            props.item.forEach((check) => (check.activeStatus = true));
            props.setItem([...props.item]);
          }}
        >
          uncheck all
        </button>

        <div className="row border border-3 my-2">
          {activeFilter.map((item, i) => (
            <div className="col-3 my-2 text-center" key={item.id}>
              <div>
                <input
                  onClick={() => complete(item, i)}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={"flexCheckDefault"}
                />
              </div>
              <div className="">
                <h5 id={item.id}>{item.input} </h5>
              </div>
              <div className="">
                <button
                className='btn btn-primary'
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
        className="btn btn-primary me-1"
          onClick={(e) => {
            
            props.item.forEach((check) => (check.activeStatus = false));
            props.setItem([...props.item]);
          }}
        >
          check all
        </button>
        <button
        className="btn btn-primary ms-1"
          onClick={() => {
            props.item.forEach((check) => (check.activeStatus = true));
            props.setItem([...props.item]);
          }}
        >
          uncheck all
        </button>

        <div className="row border border-3 my-2">
          {completedFilter.map((item, i) => (
            <div className="col-3 my-2 text-center" key={item.id}>
              <div className="">
                <input
                  onClick={() => complete(item, i)}
                  checked={item.activeStatus ? false : true}
                  className="form-check-input "
                  type="checkbox"
                  value=""
                  id={"flexCheckDefault" + i}
                />
              </div>
              <div className="">
                <h5 id={item.id}>{item.input} </h5>
              </div>
              <div className="">
                <button
                className='btn btn-primary'
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

'use client';
// src/pages/demo.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/redux/slices/counterSlice';
import Button from '@/components/form/Button.jsx'
import MenuBar from '@/components/MenuBar.jsx'
const Page = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const btnIncrement = () => { dispatch(increment()) }
  const btnDecrement = () => { dispatch(decrement()) }

  return (
    <div className='p-5'>
      <div className='flex'>
        <h1 className='p-5 mx-auto text-5xl rounded shadow-xl'>Demo</h1>
      </div>
      <div className='flex flex-col p-5 m-5 border-2 shadow rounded-xl border-rabbit-orange-light'>
        <h2 className='text-lg'>Redux</h2>
        <h2 className='text-xl'>Counter: {count}</h2>
        <div className='gap-5'>
          <Button label="Increment" color="info" size="SMALL" onClick={btnIncrement}></Button>
          <Button label="Decrement" color="info" size="SMALL" disabled onClick={btnDecrement}></Button>
        </div>
      </div>
      <div className='flex flex-col gap-5 p-5 m-5 border-2 shadow rounded-xl border-rabbit-orange-light'>
        <h2 className='text-lg'>Menu Bar</h2>
        <div className='flex flex-row gap-5'>
          <MenuBar icon="scanIcon" label="เที่ยวเดินทาง"></MenuBar>
        </div>
      </div>
      <div className='flex flex-col gap-5 p-5 m-5 border-2 shadow rounded-xl border-rabbit-orange-light'>
        <h2 className='text-lg'>Button</h2>
        <div className='gap-5'>
          LABEL
          <Button label="primary" color="primary" size="SMALL" variant="LABEL"  ></Button>
          <Button label="primary" color="primary" size="SMALL" variant="LABEL" disabled ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="LABEL" ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="LABEL" disabled ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="LABEL" ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="LABEL" disabled></Button>
        </div>
        <div className='gap-5'>
          TEXT
          <Button label="primary" color="primary" size="SMALL" variant="TEXT"  ></Button>
          <Button label="primary" color="primary" size="SMALL" variant="TEXT" disabled ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="TEXT" ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="TEXT" disabled ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="TEXT" ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="TEXT" disabled></Button>
        </div>
        <div className='gap-5'>
          OUTLINED
          <Button label="primary" color="primary" size="SMALL" variant="OUTLINED"  ></Button>
          <Button label="primary" color="primary" size="SMALL" variant="OUTLINED" disabled ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="OUTLINED" ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="OUTLINED" disabled ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="OUTLINED" ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="OUTLINED" disabled></Button>
        </div>
        <div className='gap-5'>
          OUTLINEDWHITE
          <Button label="primary" color="primary" size="SMALL" variant="OUTLINEDWHITE"  ></Button>
          <Button label="primary" color="primary" size="SMALL" variant="OUTLINEDWHITE" disabled ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="OUTLINEDWHITE" ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="OUTLINEDWHITE" disabled ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="OUTLINEDWHITE" ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="OUTLINEDWHITE" disabled></Button>
        </div>
        <div className='gap-5'>
          CONTAINED
          <Button label="primary" color="primary" size="SMALL" variant="CONTAINED"  ></Button>
          <Button label="primary" color="primary" size="SMALL" variant="CONTAINED" disabled ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="CONTAINED" ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="CONTAINED" disabled ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="CONTAINED" ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="CONTAINED" disabled></Button>
        </div>
        <div className='gap-5'>
          CONTAINEDWHITE
          <Button label="primary" color="primary" size="SMALL" variant="CONTAINEDWHITE"  ></Button>
          <Button label="primary" color="primary" size="SMALL" variant="CONTAINEDWHITE" disabled ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="CONTAINEDWHITE" ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="CONTAINEDWHITE" disabled ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="CONTAINEDWHITE" ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="CONTAINEDWHITE" disabled></Button>
        </div>
      </div>
      <div className='flex flex-col gap-5 p-5 m-5 border-2 shadow rounded-xl border-rabbit-orange-light'>
        <h2 className='text-lg'>Button Icon</h2>
        <div className='gap-5'>
          LABEL
          <Button label="primary" color="primary" size="SMALL" variant="LABEL" icon="scanIcon" ></Button>
          <Button label="primary" color="primary" size="SMALL" variant="LABEL" icon="scanIcon" disabled ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="LABEL" icon="scanIcon" ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="LABEL" icon="scanIcon" disabled ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="LABEL" icon="scanIcon" ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="LABEL" icon="scanIcon" disabled></Button>
        </div>
        <div className='gap-5'>
          TEXT
          <Button label="primary" color="primary" size="SMALL" variant="TEXT" icon="scanIcon"  ></Button>
          <Button label="primary" color="primary" size="SMALL" variant="TEXT" icon="scanIcon" disabled ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="TEXT" icon="scanIcon" ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="TEXT" icon="scanIcon" disabled ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="TEXT" icon="scanIcon" ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="TEXT" icon="scanIcon" disabled></Button>
        </div>
        <div className='gap-5'>
          OUTLINED
          <Button label="primary" color="primary" size="SMALL" variant="OUTLINED" icon="scanIcon" ></Button>
          <Button label="primary" color="primary" size="SMALL" variant="OUTLINED" icon="scanIcon" disabled ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="OUTLINED" icon="scanIcon" ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="OUTLINED" icon="scanIcon" disabled ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="OUTLINED" icon="scanIcon" ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="OUTLINED" icon="scanIcon" disabled></Button>
        </div>
        <div className='gap-5'>
          OUTLINEDWHITE
          <Button label="primary" color="primary" size="SMALL" variant="OUTLINEDWHITE" icon="scanIcon" ></Button>
          <Button label="primary" color="primary" size="SMALL" variant="OUTLINEDWHITE" icon="scanIcon" disabled ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="OUTLINEDWHITE" icon="scanIcon" ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="OUTLINEDWHITE" icon="scanIcon" disabled ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="OUTLINEDWHITE" icon="scanIcon" ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="OUTLINEDWHITE" icon="scanIcon" disabled></Button>
        </div>
        <div className='gap-5'>
          CONTAINED
          <Button label="primary" color="primary" size="SMALL" variant="CONTAINED" icon="scanIcon"  ></Button>
          <Button label="primary" color="primary" size="SMALL" variant="CONTAINED" icon="scanIcon" disabled ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="CONTAINED" icon="scanIcon" ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="CONTAINED" icon="scanIcon" disabled ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="CONTAINED" icon="scanIcon" ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="CONTAINED" icon="scanIcon" disabled></Button>
        </div>
        <div className='gap-5'>
          CONTAINEDWHITE
          <Button label="primary" color="primary" size="SMALL" variant="CONTAINEDWHITE" icon="scanIcon" ></Button>
          <Button label="primary" color="primary" size="SMALL" variant="CONTAINEDWHITE" icon="scanIcon" disabled ></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="CONTAINEDWHITE" icon="scanIcon"></Button>
          <Button label="primary" color="primary" size="MEDIUM" variant="CONTAINEDWHITE" icon="scanIcon" disabled ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="CONTAINEDWHITE" icon="scanIcon" ></Button>
          <Button label="disabled" color="primary" size="LARGE" variant="CONTAINEDWHITE" icon="scanIcon" disabled></Button>
        </div>
      </div>
      <div className='flex flex-col gap-5 p-5 m-5 border-2 shadow rounded-xl border-rabbit-orange-light'>
        <h2 className='text-lg'>Select Option</h2>
        <div className='flex flex-row gap-5'>
          <label >Select</label>
          <select label="primary" color="primary" size="SMALL" variant="LABEL" icon="scanIcon" >
            <option value='1'>Label</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Page;

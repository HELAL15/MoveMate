import { useEffect } from 'react'
import { useLocation } from 'react-router';
import { useClosing } from '../context/CloseMenu';

export default function ScrollToTop() {

const {pathname} = useLocation();
const {setOpen} = useClosing()

useEffect(()=>{
  window.scrollTo({top:0, left:0 , behavior:"instant"});
  setOpen(false)
},[pathname])

  return null
}
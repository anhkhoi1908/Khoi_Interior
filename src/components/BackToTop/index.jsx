import React, {useState} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Styles'; 

const ScrollButton = () => { 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 500) { 
	    setVisible(true) 
	} 
	else if (scrolled <= 300) { 
	    setVisible(false) 
	} 
}; 

const scrollToTop = () => { 
	window.scrollTo({ 
	    top: 0, 
	    behavior: 'smooth'
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
	<Button className='hover:bg-[#c9a575] duration-300'> 
        <FontAwesomeIcon 
            style={{display: visible ? 'inline' : 'none'}} 
            onClick={scrollToTop} 
            icon={faChevronUp}
            size='1x'    
            className='px-[1.25rem] py-[1.1rem]'
        /> 
	</Button> 
); 
} 

export default ScrollButton; 

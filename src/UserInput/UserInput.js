import React from 'react'; // 얠 데려와야 jsx문법을 유효하게 사용할 수 있음!!

import './UserInput.css'; // 얠 이렇게 manually 데려와야 저 css파일에 있는 스타일이 비로소 적용될 수 있음.
                       // 뒤에 .css 와 같이 반드시 파일 유형을 명시해줘야 한다는거 잊지말기!

// This is a function component
const userInput = (props) => { // props argument를 pass 해줘야 다른데서 이 아이의 property에 자유로이 접근 및 정의?할 수 있음!
	return (
		<div className="userInput">
			<input type="text" onChange={props.changed} placeholder={props.username}/>
				{/* onChange will be fired whenever the value of the input changes! */}	   
		</div>					
		)			

};                                   
// * when using a class-based component, it's this.props 
    // (class component 내부에서 언급되는 props 앞에는 반드시 this.이 붙어야 함~~ 위에처럼 바로 props.name같이 쓸 수 없음)			           
export default userInput;
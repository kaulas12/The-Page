import React from 'react';
import './Comp.css';
import Pic1 from './Pic1.jpeg';
import Pic2 from './Pic2.jpeg';
import Pic3 from './Pic3.jpeg';

const Comp = (props) => {
return(
	<div>
	
	<div class ="Slider">
			<div class ="slides">
				<input type="radio" name="radio_btn" id="radio1"/>
				<input type="radio" name="radio_btn" id="radio2"/>
				<input type="radio" name="radio_btn" id="radio3"/>
						<div class="slide first">
							<img alt='Photo' src={Pic1} />
						</div>

						<div class="slide">
							<img alt='Photo' src={Pic2} />
						</div>

						<div class="slide">
							<img alt='Photo' src={Pic3} />
						</div>


				</div>
						 
						<div class="navigation-manual">
							<label for="radio1" class="manual-btn"></label>
							<label for="radio2" class="manual-btn"></label>
							<label for="radio3" class="manual-btn"></label>
						</div>
	</div>


	</div>
	


	


	);

}

 export default Comp;

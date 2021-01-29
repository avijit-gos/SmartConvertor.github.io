function calculate(){
	let val = document.querySelector('#input').value;
	let unit1 = document.querySelector('#from_select');
	let F = unit1.options[unit1.selectedIndex].value;
	console.log(F);

	let unit2 = document.querySelector('#to_select');
	let T = unit1.options[unit2.selectedIndex].value;
	console.log(T);

	//KiloMeter
	if(F === 'Kilo-Meter') {
		if(T === 'Hecto-Meter') {
			alert(`${val*10} Hecto-Meter`);
		} else if(T === 'Deca-Meter') {
			alert(`${val*100} Deca-Meter`)
		} else if(T === 'Meter') {
			alert(`${val*1000} Meter`)
		} else if(T === 'Deci-Meter') {
			alert(`${val*10000} Deci-Meter`)
		} else if(T === 'Centi-Meter') {
			alert(`${val*100000} Centi-Meter`)
		} else if(T === 'Mili-Meter') {
			alert(`${val*1000000} Mili-Meter`)
		} else if(T === 'Micro-Meter') {
			alert(`${val*10000000} Micro-Meter`)
		} else if(T === 'Nano-Meter') {
			alert(`${val*10000000} Nano-Meter`)
		} else {
			alert(`${val} Kilo-Meter`)
		}	
	}

	//HectoMeter 
		if(F === 'Hecto-Meter') {
			if(T === 'Kilo-Meter') {
				alert(`${val/10} Kilo-Meter`)
			}
			else if(T === 'Deca-Meter') {
				alert(`${val*10} Deca-Meter`)
			} else if(T === 'Meter') {
				alert(`${val*100} Meter`)
			} else if(T === 'Deci-Meter') {
				alert(`${val*1000} Deci-Meter`)
			} else if(T === 'Centi-Meter') {
				alert(`${val*10000} Centi-Meter`)
			} else if(T === 'Mili-Meter') {
				alert(`${val*100000} Mili-Meter`)
			} else if(T === 'Micro-Meter') {
				alert(`${val*1000000} Micro-Meter`)
			} else if(T === 'Nano-Meter') {
				alert(`${val*10000000} Nano-Meter`)
			}
		} 

		//Deca-Meter
		if(F === 'Deca-Meter') {
			if(T === 'Kilo-Meter') {
				alert(`${val/100} Kilo-Meter`);
			} else if(T === 'Hecto-Meter') {
				alert(`${val/10} Hecto-Meter`)
			}
			else if(T === 'Meter') {
				alert(`${val*10} Meter`);
			} else if(T === 'Deci-Meter') {
				alert(`${val*100} Deci-Meter`)
			} else if(T === 'Centi-Meter') {
				alert(`${val*1000} Centi-Meter`)
			} else if(T === 'Mili-Meter') {
				alert(`${val*10000} Mili-Meter`)
			} else if(T === 'Micro-Meter') {
				alert(`${val*100000} Micro-Meter`)
			} else if(T === 'Nano-Meter') {
				alert(`${val*1000000} Nano-Meter`)
			} else {
				alert(`${val} Deca-Meter`)
			}
		}

		//Meter 
		if(F === 'Meter') {
			if(T === 'Kilo-Meter') {
				alert(`${val/1000} Kilo-Meter`)
			} else if(T === 'Hecto-Meter') {
				alert(`${val/100} Hecto-Meter`)
			} else if(T === 'Deca-Meter') {
				alert(`${val/10} Deca-Meter`)
			}
			else if(T === 'Deci-Meter') {
				alert(`${val*10} Deci-Meter`)
			} else if (T === 'Centi-Meter') {
				alert(`${val*100} Centi-Meter`)
			} else if(T === 'Mili-Meter') {
				alert(`${val*1000} Mili-Meter`)
			} else if(T === 'Micro-Meter') {
				alert(`${val*10000} Micro-Meter`)
			} else if (T === 'Nano-Meter') {
				alert(`${val*100000} Nano-Meter`)
			} else {
				alert(`${val} Meter`)
			}
		}

		//Deci-Meter
		if(F === 'Deci-Meter') {
			if(T === 'Kilo-Meter') {
				alert(`${val/10000} Kilo-Meter`)
			} else if(T === 'Hecto-Meter') {
				alert(`${val/1000} Hecto-Meter`);
			} else if(T === 'Deca-Meter') {
				alert(`${val/100} Deca-Meter`);
			} else if(T === 'Meter') {
				alert(`${val/10} Meter`)
			}
			else if(T === 'Centi-Meter') {
				alert(`${val*10} Centi-Meter`)
			} else if(T === 'Mili-Meter') {
				alert(`${val*100} Mili-Meter`)
			} else if(T === 'Micro-Meter') {
				alert(`${val*1000} Micro-Meter`)
			} else if(T === 'Nano-Meter') {
				alert(`${val*10000} Nano-Meter`)
			} else {
				alert(`${val} Deci-Meter`)
			}
		}

		//Centi-Meter
		if(F === 'Centi-Meter') {
			if(T === 'Kilo-Meter') {
				alert(`${val/100000} Kilo-Meter`)
			} else if(T === 'Hecto-Meter') {
				alert(`${val/10000} Hecto-Meter`)
			} else if (T === 'Deca-Meter') {
				alert(`${val/1000} Deca-Meter`)
			} else if(T === 'Meter') {
				alert(`${val/100} Meter`)
			} else if(T === 'Deci-Meter') {
				alert(`${val/10} Deci-Meter`)
			}
			else if(T === 'Mili-Meter') {
				alert(`${val*10} Mili-Meter`)
			} else if(T === 'Micro-Meter') {
				alert(`${val*100} Micro-Meter`);
			} else if(T === 'Nano-Meter') {
				alert(`${val*1000} Nano-Meter`)
			} else {
				alert(`${val} Centi-Meter`)
			}
		}

		//Mili-Meter
		if(F === 'Mili-Meter') {
			if(T === 'Kilo-Meter') {
				alert(`${val/1000000} Kilo-Meter`)
			} else if(T === 'Hecto-Meter') {
				alert(`${val/100000} Hecto-Meter`);
			} else if (T === 'Deca-Meter') {
				alert(`${val/10000} Deca-Meter`)
			} else if(T === 'Meter') {
				alert(`${val/1000} Meter`)
			} else if(T === 'Deci-Meter') {
				alert(`${val/100} Deci-Meter`)
			} else if (T === 'Centi-Meter') {
				alert(`${val/10} Centi-Meter`)
			}
			else if(T === 'Micro-Meter') {
				alert(`${val*10} Micro-Meter`)
			} else if(T === 'Nano-Meter') {
				alert(`${val*100} Nano-Meter`)
			} else {
				alert(`${val} Mili-Meter`)
			}
		}

		//Micro-Meter
		if(F === 'Micro-Meter') {
			if(T === 'Kilo-Meter') {
				alert(`${val/10000000} Kilo-Meter`)
			} else if(T === 'Hecto-Meter') {
				alert(`${val/1000000} Hecto-Meter`)
			} else if(T === 'Deca-Meter') {
				alert(`${val/100000} Deca-Meter`)
			} else if(T === 'Meter') {
				alert(`${val/10000} Meter`)
			} else if(T === 'Deci-Meter') {
				alert(`${val/1000} Deci-Meter`)
			} else if(T === 'Centi-Meter') {
				alert(`${val/100} Centi-Meter`)
			} else if(T === 'Mili-Meter') {
				alert(`${val/10} Mili-Meter`)
			} 
			else if(T === 'Nano-Meter') {
				alert(`${val*10} Nano-Meter`)
			} else {
				alert(`${val} Micro-Meter`)
			}
		}

		//Nano-Meter
		if(F === 'Nano-Meter') {
			if(T === 'Kilo-Meter') {
				alert(`${val/100000000} Kilo-Meter`)
			} else if(T === 'Hecto-Meter') {
				alert(`${val/10000000} Hecto-Meter`)
			} else if(T === 'Deca-Meter') {
				alert(`${val/1000000} Deca-Meter`)
			} else if(T === 'Meter') {
				alert(`${val/100000} Meter`)
			} else if(T === 'Deci-Meter') {
				alert(`${val/10000} Deci-Meter`)
			} else if(T === 'Centi-Meter') {
				alert(`1${val/1000} Centi-Meter`)
			} else if(T === 'Mili-Meter') {
				alert(`${val/100} Mili-Meter`)
			} else if(T === 'Micro-Meter') {
				alert(`${val/10} Micro-Meter`)
			} else {
				alert(`${val} Nano-Meter`)
			}
		}
}


function findRoot() {
	let num = document.querySelector('#num').value;
	let power = document.querySelector('#power').value;
	alert(Math.pow(num,power))
}

function calcDiscount() {
	let price = document.querySelector('#price').value;
	let discount = document.querySelector('#discount').value;
	let ans = (discount/100)*price;
	let new_Price = price - ans;
	alert(`New Price ${new_Price} and Discount amount ${ans}`)
}
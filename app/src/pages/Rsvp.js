import React from 'react';
import Axios from "axios";
import Autocomplete from './../incs/Autocomplete.js';

class Rsvp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			password: '',
			notSelected: false,
			nameError: false,
			passwordError: false,
			attendingError: false,
			rsvpComplete: false,
			site: props.site,
			courses: '',
			formClass: 'active-form',
			guestList: [],
			labelClass: '',
			textareaClass: 'label-textarea',
			autoClass: 'non-active',
			checkingClass: 'checking-box',
			errorClass: 'form-error',
			attendingGuests: '',
			steps: '',
			list: [],
			specialRequirements: '',
			attending: '',
			'step' : 1
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.handleRadioChange = this.handleRadioChange.bind(this);
		this.completeRsvp = this.completeRsvp.bind(this);
		this.nextStep = this.nextStep.bind(this);
		this.handleRequirements = this.handleRequirements.bind(this);
		this.logIn = this.logIn.bind(this);
		this.setAttendance = this.setAttendance.bind(this);

		this.getGuestList()
	}
	handleRequirements(event) {
		this.setState({
			textareaClass: 'label-textarea active',
			specialRequirements: event.target.value
		});
	}
	handleChange(event) {
		this.setState({
			password: event.target.value,
			labelClass: 'active',
			checkingClass: 'checking-box'
		});
	}

	handleSubmit(event) {
		this.setState({
			checkingClass: 'checking-box active'
		})
		this.getToken(this.state.password)
		event.preventDefault()
	}

	getToken(password) {
		Axios({
			method: 'post',
			url: this.state.site + 'wp-json/jwt-auth/v1/token',
			data: {
				username: 'Guest',
				password: password
			}
		}).then(res => {
			sessionStorage.setItem('newToken', res.data.token)
			this.getGuestList()
		}).catch(error => {
			this.setState({
				labelClass: 'error active',
				checkingClass: 'checking-box error'
			})
			console.log('rest error')
		})
	}
	handleCheckboxChange(event) {
		var newList = [];
		for (var i = this.state.list.length - 1; i >= 0; i--) {
			var guest = this.state.list[i]
			if(event.target.checked) {
				if(guest.value === event.target.value) {
					guest.selected = true
				} 
			} else {
				guest.selected = false
			}
			newList.push(guest)
		}
		this.setState({
			attendingGuests: newList.reverse(),
		})
	}
	handleRadioChange(event) {
		this.setState({
			attending: event.target.value
		})
	}
	setAttendance(value) {
		if(!this.state.attending) {
			this.setState({
				attendingError: true	
			})
		} else if(this.state.attending == 'no') {
			Axios({
				method: 'post',
				url: this.state.site + 'wp-json/cj/v2/not-attending',
				data: {
					attending: false,
					mainGuest: this.state.mainGuest,
				}
			}).then(res => {
				this.setState({
					step: 5
				});
			}).catch(error => {
				console.log('rest error')
			})
		} else if(this.state.attending == 'yes') {
			this.setState({
				step: 3,
			})
		}
	}
	nextStep() {
		let notSelected = 0;
		for (var i = this.state.list.length - 1; i >= 0; i--) {
			var guest = this.state.list[i]
			if(!guest.selected) {
				notSelected++
			}
		}
		if(this.state.list.length === notSelected) {
			this.setState({
				notSelected: true	
			})
		} else {
			this.setState({
				step: 4,
				courses: this.props.courses
			})
		}
	}
	getGuestList() {
		Axios({
			method: 'get',
			url: this.state.site + 'wp-json/cj/v2/guests',
		}).then(res => {
			this.setState({
				'guestList' : res.data,
				'formClass': 'non-active-form',
				'autoClass' : 'active-auto',
				'steps' : [1, 2, 3, 4],
				'step' : 1
			});
		})
	}
	completeRsvp() {
		let attendingGuests = []
		let error = 0
		this.state.attendingGuests.map((item, key) => {
			let notFoundList = []
			if(item.selected && !item.child) {
				for (var i = this.state.courses.length - 1; i >= 0; i--) {
					let course = this.state.courses[i]
					let found = false;
					for(var y = 0; y < item.selection.length; y++) {
					    if (item.selection[y].id == course.id) {
					        found = true;
					        break;
					    }
					}
					if(!found) {
						notFoundList.push(course)
						error++
					}
				}
				item.errors = notFoundList
			}
			attendingGuests.push(item)
		})
		if(error > 0) {
			window.scrollTo(0, 0)
		} else {
			// send info
			Axios({
				method: 'post',
				url: this.state.site + 'wp-json/cj/v2/complete-rsvp',
				data: {
					specialRequirements: this.state.specialRequirements,
					mainGuest: this.state.mainGuest,
					attendingGuests: attendingGuests
				}
			}).then(res => {
				this.setState({
					step: 5
				});
			}).catch(error => {
				console.log('rest error')
			})
		}
		this.setState({
			attendingGuests: attendingGuests
		})
	}
	logIn() {
		this.setState({
			nameError: false,
			passwordError: false
		});
		if(this.state.list.length === 0) {
			this.setState({
				nameError: true
			});
		}
		if(!this.state.password) {
			this.setState({
				passwordError: true
			});
		}
		if(this.state.password && this.state.list.length > 0) {
			// send request
			Axios({
				method: 'post',
				url: this.state.site + 'wp-json/cj/v2/login',
				data: {
					user: this.state.mainGuest,
					password: this.state.password
				}
			}).then(res => {
				if(res.data === 'extra information') {
					this.setState({
						step: 2
					});
				}
				if(res.data === 'complete') {
					this.setState({
						rsvpComplete: true
					});
				}
				if(!res.data) {
					this.setState({
						passwordError: true
					});
				} 
			}).catch(error => {
				
				console.log('rest error')
			})
		}
	}
	setGuestList(list) {
		if(list.group) {
			this.setState({
				'list': list.group,
				'mainGuest':list
			});
		} else {
			this.setState({
				'list': [list],
				'mainGuest':list
			});
		}
	}

	selectCourse(choice, courseTitle, guest) {

		var newGuests = [];
		this.state.attendingGuests.map((item, key) => {
			if(item.id === guest.id) {
				let selection = {}
				var found = false
				var key = ''
				for (var i = item.selection.length - 1; i >= 0; i--) {
					var currentSelection = item.selection[i]
					if(currentSelection.id == courseTitle) {
						found = true
						key = i
					}
				}

				if(!found) {
					selection.id = courseTitle
					selection.choice = choice
					item.selection.push(selection)
				} 
				if(found) {
					item.selection[key].id = courseTitle
					item.selection[key].choice = choice
				}
			}
			newGuests.push(item)
		})
		this.setState({
			'attendingGuests': newGuests
		});
	}
	courses(guest, inputKey) {
		if(this.state.courses) {
			let courses = this.state.courses.map((item, key) => {
				let courseTitle = item.type
				let inputName = courseTitle + inputKey;
				let course = item.options.map((item, key) => {
					return <li key={key}>
								<label className="checkbox-container">
									{item.option}
									<input value={item.option} name={inputName} type="radio" />
									<span className="checkmark"></span>
								</label>
							</li>
					})
				return <ul className="course-list" key={key}>
						<li>
							<div className="course-title">{courseTitle}</div>
							<ul onChange={e => this.selectCourse(e.target.value, item.id, guest)}>{course}</ul>
						</li>
					</ul>
			})
			return courses
		} else {
			return ''
		}
	}
	render() {	
		let stepsWrapper, 
			group, 
			wrapperGroup, 
			attendingGuests, 
			attendingSection, 
			courses,
			login,
			nameError,
			passwordError,
			notSelected,
			rsvpSent,
			rsvpComplete,
			attendingError,
			errors =''
		function courseList() {
			return '<div>course</div>'
		}
		if(this.state.nameError) {
			nameError = <div className="error-message">Please enter your name</div>
		}
		if(this.state.notSelected) {
			notSelected = <div className="error-message not-selected">Please select at least one guest</div>
		}
		if(this.state.passwordError) {
			passwordError = <div className="error-message">Please enter the correct password</div>
		}
		if(this.state.attendingError) {
			attendingError = <div className="error-message not-selected">Please select an option</div>
		}
		if(this.state.rsvpComplete) {
			rsvpComplete = <div className="error-message">Your group has already RSVP'd </div>
		}
		if(this.state.steps) {
			let steps = this.state.steps.map((item, key) => {
				let stepClass = ''
				if(item === this.state.step) {
					stepClass = 'active'
				}
				return <li className={stepClass} key={key}>{item}</li>
			})
			stepsWrapper = <ul className="rsvp-steps">{steps}</ul>
			if(this.state.step === 5) {
				stepsWrapper = ''
			}
		}
		if(this.state.step == 1) {
			login = <div className={this.state.autoClass} >
						<p>Please login</p>
						<Autocomplete callbackFromParent={(e) => this.setGuestList(e)} list={this.state.guestList}  />
						{nameError}
						<label className="password-label">
							<input autocomplete="off" placeholder="Password" type="password" value={this.state.password} onChange={this.handleChange}  />
						</label>
						{rsvpComplete}
						{passwordError}
						<div className="button-container step-1">
							<button onClick={this.logIn}>Login</button>
						</div>
				</div>
		}
		if(this.state.list.length > 0 && this.state.step == 2) {
			wrapperGroup = <div className="list-wrapper">
					<p>Can you attend?</p>
					<ul>
						<li>
							<label className="checkbox-container">
								Happily accept
								<input value="yes" name="attendance" onChange={this.handleRadioChange} type="radio" />
								<span className="checkmark"></span>
							</label>
						</li>
						<li>
							<label className="checkbox-container">
								Declines with regret
								<input value="no" name="attendance" onChange={this.handleRadioChange} type="radio" />
								<span className="checkmark"></span>
							</label>
						</li>
					</ul>
					{attendingError}
					<div className="button-container">
						<button onClick={this.setAttendance}> Next step</button>
					</div>
				</div>
		} 
		if(this.state.step == 3) {
			let message = <p>Please select your name</p>
			if(this.state.list.length > 1) {
				message = <p>Please select the guests that will be attending the wedding</p>
			}
			group  = this.state.list.map((item, key) => {
				let guest = ''
				if(!item.attending) {
					guest = <label className="checkbox-container">
								{item.value}
								<input value={item.value} onChange={this.handleCheckboxChange} type="checkbox" />
								<span className="checkmark"></span>
							</label>
				}
				return 	<li key={key}>
							{guest}
						</li>	
			})
			wrapperGroup = <div className="list-wrapper">
					{message}
					<ul>
						{group}
					</ul>
					{notSelected}
					<div className="button-container">
						<button onClick={this.nextStep}> Next step</button>
					</div>
				</div>
		}
		if(this.state.step == 4) {
			wrapperGroup = ''
			if(this.state.attendingGuests.length > 0) {
				attendingGuests  = this.state.attendingGuests.map((item, key) => {
					if(item.selected && !item.child) {
						return 	<div className="guest-selection-box" key={key}>
							<div className="guest-name">{item.value}'s selection</div>
							<ul>{this.courses(item, key)}</ul>
						</div>
					} else if(item.selected && item.child) {
						return 	<div className="guest-selection-box" key={key}>
							<div className="guest-name">{item.value}'s selection</div>
							<div className="children-menu">{this.props.childrensMenu}</div>
						</div>
					}
				})
				errors  = this.state.attendingGuests.map((item, key) => {
					if(item.errors) {
						let innerError = item.errors.reverse().map((item2, key2) => {
							return <li key={key2}>Please select a {item2.type} for {item.value}</li>
						})
						return <ul className="error-message" key={key}>{innerError}</ul>
					}
				})
				if(errors) {
					errors = <div className="error-message-container">{errors}</div>
				}
				
				attendingSection = <div className="menu-selection-container">
					<p>Please select your choice of meal, with any special dietary requirements</p>
					{errors}
					{attendingGuests}
					<label className={this.state.textareaClass}>
						<textarea placeholder="Any special dietary requirements" value={this.state.specialRequirements} onFocus={this.handleRequirements} onChange={this.handleRequirements}></textarea>
					</label>
					<div className="button-container">
						<button onClick={this.completeRsvp}>Submit</button>
					</div>
				</div>
			}
		}
		if(this.state.step === 5) {
			rsvpSent = <p className="rsvp-complete">
				Thank you, your RSVP has been sent!
			</p>
		}
		return (
			<div className="rsvp-template">
				<h2 className="underline-circle">RSVP</h2>
				{rsvpSent}
				{stepsWrapper}
	 			{login}
				{wrapperGroup}
				{attendingSection}
			</div>
		)
	}
}
export default Rsvp;


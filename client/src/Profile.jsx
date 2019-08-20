import React from 'react';
import './App.css';
import Modal from 'react-modal';
import Axios from 'axios';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelters: [],
            name: '',
            address: '',
            hours: '',
            showModal: false
        }
    }

    componentDidMount() {
        Axios.get('/shelters').then(res => {
            this.setState({ shelters: res.data });
        }).catch(err => console.log('errrrr', err));
    }

    deleteShelter = shelterId => {
        Axios.delete(`/shelters/${shelterId}`).then(res => {
            this.setState(prevState => ({ shelters: prevState.shelters.filter(s => s._id !== shelterId) }));
        }).catch(err => console.log('errrrr', err));
    }

    toggleModal = () => this.setState(prevState => ({showModal: !prevState.showModal}));
    
    handleInputChange = e => this.setState({[e.target.name]: e.target.value});

    updateShelter = e => {
        e.preventDefault();
        const {_id, name, address, hours, shelters} = this.state;
        Axios.put(`/shelters/${_id}`, {name, address, hours}).then(res => {
            const shelterIndex = shelters.findIndex(s => s._id === _id);
            shelters.splice(shelterIndex, 1, res.data);
            this.setState({ shelters, showModal: false });
        }).catch(err => console.log('errrrr', err));
    }

    render() {
        const { shelters, showModal, name, address, hours } = this.state;
        return (
            <div className='profile'>

                <Modal
                    isOpen={showModal}
                    onRequestClose={this.toggleModal}
                    style={customStyles}
                >
                    <button onClick={this.toggleModal}>close</button>
                    <h1>Edit a Shelter</h1>
                    <form onSubmit={this.updateShelter}>
                        <div> <input required name='name' value={name} onChange={this.handleInputChange} /> </div>
                        <div> <input required name='address' value={address} onChange={this.handleInputChange} /> </div>
                        <div> <input required name='hours' value={hours} onChange={this.handleInputChange} /> </div>
                        <button>Update</button>
                    </form>
                </Modal>
            
                <h1>Saved Shelters:</h1>

                {shelters.map(s => {
                    return (
                        <div key={s._id}>
                            <span>Name: {s.name}, Address: {s.address}, Hours: {s.hours}</span> - 
                            <button onClick={() => this.setState({showModal: true, ...s })}>Edit</button> - 
                            <button onClick={() => this.deleteShelter(s._id)}>Delete</button>
                        </div>
                    );
                })}
            </div>
        );
    }

}



export default Profile
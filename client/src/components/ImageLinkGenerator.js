import React, { useState} from 'react';
import axios from 'axios';
import Nav from '../Nav';

const ImageLinkGenerator = () => {

    const [file, setFile] = useState(''); 
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');


    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name); 
    };


    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file) 

        try{
            const res = await axios.post('api/img', formData, {
                headers: {
                    'Content-Type': 'mulipart/form-data'
                },
            });

            const {fileName, filePath} = res.data

            setUploadedFile({ fileName, filePath })
        } catch(err){
            console.log('error')
        }
    }


    return(
        <div className="main">
            <Nav />
            <div className="main-2">
            <h1 className="text-center">Image Link Generator</h1>
            <div className="content">
            <h2>If you don't have an image link then simply upload your picture here and you will get a link</h2>
            <form onSubmit={onSubmit}>
                <div className="custom-file mb-4">
                    <input type="file" className="custom-file-input" id="customFile" onChange={onChange} />
                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>
                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
            </form>
            { uploadedFile ? (<div className="row mt-5">
                <div className="col-md-6 m-auto">
                <h4 className="text-center">Your link is: {`http://JuicyPost.xyz${uploadedFile.filePath}`}</h4>
                <img style={{ width: '100%' }} src={uploadedFile.filePath} alt="" />
                </div>
            </div>) : <p>None</p>}
            </div>
            </div>
        </div> 

    )

}

export default ImageLinkGenerator;
import React, { Fragment, useState, useContext } from 'react';
import Button from '../../shared/components/formElements/button';
import Card from '../../shared/components/uiElements/card';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../shared/utils/validator';
import { AuthContext } from '../../shared/context/auth-context';
import UploadImage from "../../shared/components/formElements/imageUpload";
import ErrorModal from '../../shared/components/uiElements/ErrorModal';
import LoadingSpinner from '../../shared/components/uiElements/LoadingSpinner';



const Dashboard = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm({
        image: {
            value: null,
            isValid: false
        }
    }, false)


    const onSubmitHandler = async e => {
        e.preventDefault();
        const {  image } = formState.inputs;
        const formData = new FormData();
        formData.append('image', image.value);
        try {
            await sendRequest(
                'http://localhost:8000/api/auth/uploadimage',
                'POST',
                 formData,
                { Authorization: 'Bearer ' + auth.token }
            )
        } catch (err) { }
    }

    return ( 
        <Fragment>
        <h1>Welcome to Your Dashboard....</h1>
            {error && <ErrorModal error={error} onClear={clearError} />}
            <Card className='addfile'>
                {isLoading && <LoadingSpinner asOverlay />}
                <form onSubmit={onSubmitHandler}>
                <UploadImage  id="image"
                        onInput={inputHandler}
                        errorText='Please provide an image'
                        center />
                    <Button
                        type='submit'
                        disabled={!formState.isValid}
                    >
                        UPLOAD FILE
                    </Button>
                    </form>
                    </Card>
        </Fragment>
    
     );
}
 
export default Dashboard;

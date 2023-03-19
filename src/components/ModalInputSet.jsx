import React from 'react'
import { useDispatch } from 'react-redux';
import { __changeNickname, __changePassword } from '../redux/modules/userSlice';
import { ButtonSmall, FlexHorizontal, FlexVertical, StInput } from '../variables/styleStore'
import useLoginInput from '../variables/useLoginInput'

function ModalInputSet({ children }) {

    const [newPassword, onNewPasswordChangeHandler] = useLoginInput('');
    const [checkPassword, onCheckPasswordChangeHandler] = useLoginInput('');
    const dispatch = useDispatch();
    const action = children.type == 'password' ? __changePassword : __changeNickname;
    const objectForThunk = children.type == 'password'
        ? {
            password: children.value,
            passwordNew: newPassword,
            passwordCheck: checkPassword,
        }
        : {
            nickname: children.value,
        };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('password :', children.value);
        console.log('passwordNew :', newPassword);
        console.log('passwordCheck :', checkPassword);
        if(children.type === 'password'){
            if(newPassword !== checkPassword){
                alert("새로운 비밀번호와 비밀번호 확인을 일치시켜 주세요.");
            } else {
                dispatch(action(objectForThunk));
            }
        } else {
            dispatch(action(objectForThunk));
        }
    }

    return (
        <form onSubmit={onSubmitHandler} style={{ width: '100%', height: 'fit-content' }}>
            <FlexVertical gap='20px'>
                <FlexHorizontal alignItems='center' justifyContent='space-between'>
                    <StInput
                        value={children.value}
                        type={children.type}
                        placeholder={children.placeHolder}
                        minLength={children.minLength}
                        maxLength={children.maxLength}
                        onChange={children.onChange}
                        required />
                    <ButtonSmall>{children.buttonText}</ButtonSmall>
                </FlexHorizontal>
                {children.type == 'password'
                    ? <FlexVertical gap='20px'>
                        <div>
                            <StInput
                                value={newPassword}
                                type='text'
                                onChange={onNewPasswordChangeHandler}
                                minLength={children.minLength}
                                maxLength={children.maxLength}
                                placeholder='변경할 Password'
                                required
                            />
                        </div>
                        <div>
                            <StInput
                                value={checkPassword}
                                type='text'
                                onChange={onCheckPasswordChangeHandler}
                                minLength={children.minLength}
                                maxLength={children.maxLength}
                                placeholder='새 Password 확인'
                                required
                            />
                        </div>
                    </FlexVertical>
                    : null}
            </FlexVertical>
        </form>
    )
}

export default ModalInputSet
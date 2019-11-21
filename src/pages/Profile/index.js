import React from 'react';
import {Form, Input} from '@rocketseat/unform';
import {useSelector, useDispatch} from 'react-redux';
import {updateProfileRequest} from '~/store/modules/user/actions';
import {signOut} from '~/store/modules/auth/actions';

import AvatarInput from './AvatarInput';

import {Container} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Email" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Actual password"
        />
        <Input name="password" type="password" placeholder="New password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
        />
        <button type="submit">Update Profile</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Leave GoBarber
      </button>
    </Container>
  );
}

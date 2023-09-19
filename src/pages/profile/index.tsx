import { useAuth0 } from "@auth0/auth0-react";

import { UnexpectedError } from "components/shared/error";
import Loading from "components/shared/loading";
import Page from "components/shared/page";
import Profile from "components/profile";

const ProfilePage = (): JSX.Element => {
  const { user, isLoading, error } = useAuth0();

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (error) {
    content = <UnexpectedError />;
  } else if (user) {
    content = <Profile user={user} />;
  }

  return (
    <Page name="profile" title="Profile">
      {content}
    </Page>
  );
};

export default ProfilePage;

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();

  return (
    user && (
      <div className="flex flex-col items-center justify-center">
        <img
          src={user.picture}
          alt={user.name}
          className="rounded-full w-20 h-20"
        />
        <h2 className="text-2xl mt-4">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
    )
  );
};

export default Profile;

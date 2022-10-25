import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import Swal from "sweetalert2";

const UserDetails = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = () => {
    Swal.fire("Congratulations!!!!");
  };
  return (
    <div>
      <div className="w-half mx-auto">
        <Card>
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src={user?.photoURL}
              alt={user?.displayName}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user?.displayName}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Web Developer
            </span>
            <form
              onSubmit={handleSubmit}
              className="w-9/11 flex flex-col gap-4"
            >
              <div className="flex  justify-evenly">
                <div className="mx-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your Full Name" />
                  </div>
                  <TextInput
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required={true}
                  />
                </div>
                <div className="mx-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    required={true}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="address" value="Your Adrress" />
                </div>
                <TextInput
                  id="address"
                  type="text"
                  placeholder=""
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="Your Contact Number" />
                </div>
                <TextInput
                  id="phone"
                  type="number"
                  placeholder="+8801123456789"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="password1"
                    value="Retype password to confirm changes"
                  />
                </div>
                <TextInput id="password1" type="password" required={true} />
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserDetails;

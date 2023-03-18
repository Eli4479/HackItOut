import React from "react";
import { FaHashtag, FaPlus, FaUserCircle } from 'react-icons/fa';

export default function Modal({ type }) {

  const [showModal, setShowModal] = React.useState(false);
  const [teamName, setTeamName] = React.useState("");
  const [teamPassword, setTeamPassword] = React.useState("");

  const JoinATeam = async () => {
    const profile_id = localStorage.getItem("profile_id");
    let team = {
      "teamcode": teamPassword
    }
    let response = await fetch(`http://localhost:3000/api/user/${profile_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(team)
    });
    let data = await response.text();
    let team_info = JSON.parse(data);
    console.log(team_info);
    setShowModal(false);
    window.location.reload();


  }

  const createTeam = async () => {
    const profile_id = localStorage.getItem("profile_id");
    let team = {
      "teamName": teamName,
      "teamcode": teamPassword,
      "members": [profile_id],
      "is_leader_of": [profile_id]
    }
    console.log(team);
    let response = await fetch(`http://localhost:3000/api/user/${profile_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(team)
    });
    let data = await response.text();
    let team_info = JSON.parse(data);
    console.log(team_info);
    setShowModal(false);
    window.location.reload();
  }
  return (
    <>
      <button
        className="flex px-4 py-2 mt-5 w-full text-gray-600 rounded-md hover:bg-gray-200 items-center  font-bold uppercase text-sm  shadow hover:shadow-lg  focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {type === 'Create Team' ? <FaPlus /> : <FaHashtag />}
        <span className="mx-4 font-medium ">{type}</span>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {
                  type == 'Create Team' ?
                    (
                      <>
                        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                          <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
                            Create Team
                          </h1>
                          <form className="mt-6">
                            <div className="mb-2">
                              <label
                                for="Team Name"
                                className="block text-sm font-semibold text-gray-800"
                              >
                                Team Name
                              </label>
                              <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={(e) => { setTeamName(e.target.value) }}
                              />
                            </div>
                            <div className="mb-2">
                              <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"
                              >
                                Team Password
                              </label>
                              <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={(e) => { setTeamPassword(e.target.value) }}
                              />
                            </div>
                            <div className="mt-6 flex justify-center text-center">
                              <div className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={createTeam}>
                                Create Team
                              </div>
                            </div>
                            <div className="mt-6 flex justify-center text-center">
                              <div className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" to={'/profile'}>
                                <button onClick={() => setShowModal(false)}>Close</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </>
                    )
                    :
                    null
                }
                {
                  type == "Join Team" ?
                    (
                      <>
                        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                          <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
                            Join Team
                          </h1>
                          <form className="mt-6">
                            <div className="mb-2">
                              <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"
                              >
                                Team Password
                              </label>
                              <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={(e) => { setTeamPassword(e.target.value) }}
                              />
                            </div>
                            <div className="mt-6 flex justify-center text-center">
                              <div className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={JoinATeam}>
                                Join Team
                              </div>
                            </div>
                            <div className="mt-6 flex justify-center text-center">
                              <div className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" to={'/profile'}>
                                <button onClick={() => setShowModal(false)}>Close</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </>
                    ) : null
                }
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </>

      ) : null
      }
    </>
  );
}
import Sidebar from '../components/sidebar'
import Buttons from '../components/buttons'
import { useEffect, useState } from 'react'
import React from 'react'
// import profile variable from login.js
const Teams = () => {

    const [teams, setTeams] = useState([]);
    const [profile, setProfile] = useState("");
    useEffect(() => {
        const get_profile = async () => {
            const profile_id = localStorage.getItem("profile_id");
            console.log(profile_id);
            let response = await fetch(`http://localhost:3000/api/user/${profile_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            let data = await response.text();
            let profile = JSON.parse(data);
            setProfile(profile);
            return profile;
        }
        const get_team_info = async (profile) => {
            let the_team = []
            console.log(profile.teams);
            for (let team_id of profile.teams) {
                console.log(team_id);
                if (team_id === undefined || team_id === null) {
                    continue;
                }
                let response = await fetch(`http://localhost:3000/api/user/teams/${team_id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                let data = await response.text();
                let team_info = JSON.parse(data);
                the_team.push(team_info);
            }
            setTeams(the_team);
            console.log(teams);
            return the_team;
        }
        get_profile().then((profile) => {
            get_team_info(profile).then((the_team) => {
                console.log(the_team);
            }
            );
        }
        );
    }, [])

    return (
        <>

            <div className="flex items-center justify-center">
                <div>
                    <Sidebar name={profile} />
                </div>

                <div className="w-full h-full p-4 m-8 overflow-y-auto ">
                    <div className="flex items-center justify-center p-8 border-4 border-dotted">
                        <div className="flex flex-col w-full">
                            {teams.map((team) => {
                                return (
                                    <div key={team._id}>
                                        <Buttons team={team} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teams
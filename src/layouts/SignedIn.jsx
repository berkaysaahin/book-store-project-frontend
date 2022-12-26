import React from 'react'
import { Dropdown, Menu , Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://lh3.googleusercontent.com/ogw/AOh-ky2Pnb1aqmd7NzQp4ybdjKwIzOTCWY8Zm35cRC4y-g=s32-c-mo" />
                <Dropdown pointing = "top right" text = "Berkay">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Info" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}


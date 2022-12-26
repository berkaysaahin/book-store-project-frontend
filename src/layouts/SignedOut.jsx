import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn}>Sign In</Button>
                <Button style = {{marginLeft: "0.5em" }}>Sign Up</Button>
            </Menu.Item>
        </div>
    )
}


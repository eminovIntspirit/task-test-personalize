import {
    Divider,
    Title,
    Group,
    Button,
    Switch,
    Container,

} from '@mantine/core';

import './App.css'
import {QuizBlock} from "./components/QuizBlock.tsx";
import {checkboxes} from "./constants";
import {useState} from "react";

function App() {
    const [show, setShow] = useState(false);

    return (
    <>
        {show ? (
            <Container data-cy={'quiz'} style={{
                border: '1px solid rgb(64, 192, 87)',
                backgroundColor: 'white',
                borderRadius: '0.4rem',
                padding: 0,
            }}>
                <Switch.Group defaultValue={['react']}
                >
                    <Group style={{
                        background: 'rgb(64, 192, 87)',
                        borderRadius: '0.25rem 0.25rem 0 0',
                        padding: '10px 20px',

                    }} position="center" grow>
                        <Title align={'start'} order={3}>Personalization Settings:</Title>
                        <Switch
                            value={'react'}
                            labelPosition="left"
                            label="Use Account Research"
                            size="lg"
                        />
                    </Group>
                </Switch.Group>

                <QuizBlock title={'Profile'} checkboxes={checkboxes.profile}/>

                <Divider style={{margin: '0 60px'}} my="sm" />

                <QuizBlock title={'Account'} checkboxes={checkboxes.account}/>

            </Container>
        ): (
            <Button data-cy={"show-quiz"} onClick={() => setShow(!show)} color="green" radius="md" size="lg">
                Click to Personalize
            </Button>
        )}
    </>
  )
}

export default App

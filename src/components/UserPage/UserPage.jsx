import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconDisc, IconMicrophone2 } from '@tabler/icons-react';
import { Button, rem } from '@mantine/core';
import { BackgroundImage, Center, Flex, Box, Paper } from '@mantine/core';
import { Text } from '@mantine/core';




function UserPage() {

  const user = useSelector((store) => store.user);
  return (

    <Center p="md">
      <BackgroundImage src="./images/cassette.jpg"
        radius="lg">
        <Box maw={800} mx="xl">
          <div className="container">
            <Text c="blue"
                  ta="center"
                  fw={700}
                  >Welcome, {user.username}!</Text>
            <Button.Group>
              <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
              >
                <div >
                  <Button leftIcon={<IconMicrophone2 size={rem(25)} />}
                    radius="lg"
                    size="md"
                    variant="outline"
                    color="light"
                    component={Link} to="/artists">
                    Artists
                  </Button>
                </div>

                <div>
                  <Button leftIcon={<IconDisc size={rem(25)} />}
                    radius="lg"
                    size="md"
                    variant="outline"
                    color="light"
                    component={Link} to="/albums">
                    Albums
                  </Button>
                </div>
              </Flex>
            </Button.Group>

          </div>
        </Box>
      </BackgroundImage>
      
    </Center>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

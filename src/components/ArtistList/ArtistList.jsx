import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from "react-router-dom";
import { Button } from '@mantine/core';
import { Global } from '@mantine/core';
import { createStyles, Table, ScrollArea, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    header: {
      position: 'sticky',
      top: 0,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      transition: 'box-shadow 150ms ease',
  
      '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderBottom: `${rem(1)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
        }`,
      },
    },
  
    scrolled: {
      boxShadow: theme.shadows.sm,
    },
  }));

function ArtistList() {

    const dispatch = useDispatch();
    const store = useReduxStore();


    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_LIST' });
    }, [dispatch]);

    interface TableScrollAreaProps {
        data: { Artists: string; Albums: Number; }[];
      }
      
      const TableScrollArea = ({ data }: TableScrollAreaProps) => {
        const { classes, cx } = useStyles();
        const [scrolled, setScrolled] = useState(false);
      
        const rows = (
            <tbody>{store.artist.map((item, index) => (
          <tr key={index}>
            <td><Link to={`/artist_detail/${item.id}`}>{item.artist_name}</Link></td>
            <td>{item.count}</td>
          </tr>
        ))}
        </tbody>
        );

   return ( <>
   <Global
          styles={{
            body: {
              margin: 0,
              fontFamily: "Roboto, sans-serif",
            },
          }}
        />
   
   <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Artists</th>
            <th>Albums</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
    </>
   );
}


}

export default ArtistList;







    





{/* <div className="nav-buttons">
         <div>
            <Link to='/add_album'><Button color='gray' >Add Album</Button></Link>
            <Link to='/albums'><Button color='gray'>My Albums</Button></Link>
        </div>
    </div>
   <div>
    <table className="artist-table">
        <thead>
        <tr>
        <th>Artist</th>
        <th>Number of Albums</th>
        </tr>
        </thead>
       
        <tbody>{store.artist.map((item, index) => (
                <tr key={index}>
                    <td>
                        <Link to={`/artist_detail/${item.id}`}>{item.artist_name}</Link></td>
                    <td>{item.count}</td>
                </tr>
                ))}
        </tbody>
        
        </table>
   </div>
   </>
   */}
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/accordion';
import { AiFillStar } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';

const UserList = () => {
  const { results, username, repositories } = useStateContext();
  console.log(repositories);

  return (
    <div className="w-full h-full bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center w-full h-full gap-4 mt-4">
          <h1>
            Showing users for "<span className="capitalize">{username}</span>"
          </h1>
          <div className="w-full px-6 max-w-2xl">
            <Accordion className="flex flex-col gap-4" allowToggle>
              {results.map((res, i) => (
                <AccordionItem key={res.login + i}>
                  <AccordionButton className="bg-slate-200 py-2 px-2">
                    <div className="flex flex-row justify-between w-full items-center">
                      <span className="capitalize">{res.login}</span>
                      <AccordionIcon />
                    </div>
                  </AccordionButton>
                  <AccordionPanel className="space-y-2 mt-2 pl-4">
                    {repositories.map((res, i) => (
                      <div className="flex flex-col bg-gray-300 p-2">
                        <div className="flex flex-row justify-between">
                          <span className="font-bold">{res.name}</span>
                          <div className="flex flex-row items-center gap-1">
                            {res.stargazers_count}
                            <AiFillStar />
                          </div>
                        </div>
                        <p>{res.description}</p>
                      </div>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;

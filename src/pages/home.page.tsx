import React, { useEffect, useState } from 'react';
import { CatFact } from '../entities';
import { catFactsService } from '../services/cat-facts.service';

export const HomePage = (): React.ReactElement => {
  const [facts, setFacts] = useState<Array<CatFact>>([]);

  useEffect(() => {
    const getCatFacts = async (): Promise<void> => {
      const catFacts = await catFactsService.get();
      setFacts(catFacts);
    }
    getCatFacts();
  },[])
  const listItems = facts.map((fact) =>
    <li>{fact.text}</li>
  ); 
  return <ul>{listItems}</ul>
}

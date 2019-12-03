const [info, setInfo] = useState([]);
  useEffect(() => {
    Axios.get('http://api.football-data.org/v2/competitions/2021/standings', {
      headers: {'X-Auth-Token' : 'ffdf6b8895ad49d3af4db2724aea4c3b', 'Content-Type': 'application/json'},
    })
      .then(data => setInfo(data.data.standings[0].table))
  }, [])

  function storeData() {
    let results = [];
    for (let i = 0; i < 20; i++) {
      console.log(info[i].team.name)
      console.log(i + 1)
      results.push(`${i + 1} ${info[i].team.name}`);
    }
    return results;
  }
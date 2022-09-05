it('GET',function(){
  cy.request({
    method: 'POST', 
    url: 'https://43973re9q5.execute-api.us-east-1.amazonaws.com/dev', 
    body: {
      name: ''
    }
  }).then( ({ status }) => {
    expect(status).to.eq(200)
  });

  cy.request({
    method: 'GET', 
    url: 'https://43973re9q5.execute-api.us-east-1.amazonaws.com/dev', 
  }).then( ({ body }) => {
    expect(body).to.satisfy((num) => { return num > 0 }) // id must be bigger than 0
  
  })
  

})
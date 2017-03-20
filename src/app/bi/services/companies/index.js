class Companies {
    companies = [];
    
    get() {
        return this.companies;
    }
    
    add(company) {
        this.components.push(company);
    }
}

const CompaniesService = new Companies();

export default CompaniesService;

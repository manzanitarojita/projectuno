const COMPANYTYPE = {
    DEFAULT: 'DEFAULT',
    AUDIT: 'AUDIT'
};

class Companies {
    companies = [];
    
    get() {
        return this.companies;
    }
    
    add(company) {
        this.companies.push(company);
    }
    
    getCompanyType() {
        return COMPANYTYPE;
    }
}

const CompaniesService = new Companies();

export default CompaniesService;

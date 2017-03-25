const COMPANYTYPE = {
    DEFAULT: 'DEFAULT',
    AUDIT: 'AUDIT'
};

class Companies {
    companies = [
        {
            Id: 'simple_company',
            Name: 'Simple Company',
            ShortName: 'SMCMS',
            INN: '1-8901371023'
        }
    ];
    
    get() {
        return this.companies;
    }
    
    add(company) {
        company.Id = company.Name.toLowerCase() + '_company';
        
        this.companies.push(company);
    }
    
    getCompanyType() {
        return COMPANYTYPE;
    }
}

const CompaniesService = new Companies();

export default CompaniesService;

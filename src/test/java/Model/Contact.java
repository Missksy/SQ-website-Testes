package Model;

import java.net.URL;

public class Contact {
    String Birthday;
    String City;
    String Company;
    String Email;
    String GivenName;
    String Guid;
    String Occupation;
    Long Phone;
    URL PhotoUrl;
    String Source;
    String StreetAddress;
    String Surname;

    public Contact(String birthday, String city, String company,
                   String email, String givenName, String guid,
                   String occupation, Long phone, URL photoUrl,
                   String source, String streetAddress, String surname) {
        Birthday = birthday;
        City = city;
        Company = company;
        Email = email;
        GivenName = givenName;
        Guid = guid;
        Occupation = occupation;
        Phone = phone;
        PhotoUrl = photoUrl;
        Source = source;
        StreetAddress = streetAddress;
        Surname = surname;
    }

    public String getBirthday() {
        return Birthday;
    }

    public void setBirthday(String birthday) {
        Birthday = birthday;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }

    public String getCompany() {
        return Company;
    }

    public void setCompany(String company) {
        Company = company;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getGivenName() {
        return GivenName;
    }

    public void setGivenName(String givenName) {
        GivenName = givenName;
    }

    public String getGuid() {
        return Guid;
    }

    public void setGuid(String guid) {
        Guid = guid;
    }

    public String getOccupation() {
        return Occupation;
    }

    public void setOccupation(String occupation) {
        Occupation = occupation;
    }

    public Long getPhone() {
        return Phone;
    }

    public void setPhone(Long phone) {
        Phone = phone;
    }

    public URL getPhotoUrl() {
        return PhotoUrl;
    }

    public void setPhotoUrl(URL photoUrl) {
        PhotoUrl = photoUrl;
    }

    public String getSource() {
        return Source;
    }

    public void setSource(String source) {
        Source = source;
    }

    public String getStreetAddress() {
        return StreetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        StreetAddress = streetAddress;
    }

    public String getSurname() {
        return Surname;
    }

    public void setSurname(String surname) {
        Surname = surname;
    }
}
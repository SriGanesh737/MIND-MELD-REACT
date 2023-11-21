import React from 'react';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import styles from './sendmail.module.css';

const SendMail = () => {
  return (
    <div className={styles.bodysss}>
      <AdminNavbar />
      <div className={styles.sendmails}>
        <h2 style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: '900', marginBottom: '20px',textAlign:'center' }}>
          Email MINDMELD members
        </h2>
        <h3 style={{ fontFamily: 'Open Sans, sans-serif' }}>Category</h3>
        <form action="/admin/mail" method="post" className={styles.form}>
          <label className={styles.checkboxLabel}>
            <input className={styles.checkboxInput} type="checkbox" name="experts" value="1" />
            Experts
          </label>
          <label className={styles.checkboxLabel}>
            <input className={styles.checkboxInput} type="checkbox" name="users" value="2" />
            Users
          </label>
          <h3 style={{ fontFamily: 'Open Sans, sans-serif' }}>Subject</h3>
          <input type="text" name="subject" className={styles.subject} required />
          <h3 style={{ fontFamily: 'Open Sans, sans-serif' }}>Message</h3>
          <textarea className={styles.textarea} id="" cols="100" rows="8" name="content" required></textarea>
          <p style={{ color: '#8f8f8f', fontWeight: '700', fontSize: '20px', margin: '10px 0' }}>sent</p>
          <button type="submit" className={styles.submitButton}>
            SEND MAIL
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMail;

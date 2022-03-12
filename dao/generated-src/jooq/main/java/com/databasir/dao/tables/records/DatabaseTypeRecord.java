/*
 * This file is generated by jOOQ.
 */
package com.databasir.dao.tables.records;


import com.databasir.dao.tables.DatabaseType;
import com.databasir.dao.tables.pojos.DatabaseTypePojo;

import java.time.LocalDateTime;

import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record12;
import org.jooq.Row12;
import org.jooq.impl.UpdatableRecordImpl;


/**
 * customer database types
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class DatabaseTypeRecord extends UpdatableRecordImpl<DatabaseTypeRecord> implements Record12<Integer, String, String, String, String, String, String, String, Boolean, Integer, LocalDateTime, LocalDateTime> {

    private static final long serialVersionUID = 1L;

    /**
     * Setter for <code>databasir.database_type.id</code>.
     */
    public void setId(Integer value) {
        set(0, value);
    }

    /**
     * Getter for <code>databasir.database_type.id</code>.
     */
    public Integer getId() {
        return (Integer) get(0);
    }

    /**
     * Setter for <code>databasir.database_type.database_type</code>. such as
     * mysql, postgresql, mysql5.5 and so on
     */
    public void setDatabaseType(String value) {
        set(1, value);
    }

    /**
     * Getter for <code>databasir.database_type.database_type</code>. such as
     * mysql, postgresql, mysql5.5 and so on
     */
    public String getDatabaseType() {
        return (String) get(1);
    }

    /**
     * Setter for <code>databasir.database_type.icon</code>.
     */
    public void setIcon(String value) {
        set(2, value);
    }

    /**
     * Getter for <code>databasir.database_type.icon</code>.
     */
    public String getIcon() {
        return (String) get(2);
    }

    /**
     * Setter for <code>databasir.database_type.description</code>.
     */
    public void setDescription(String value) {
        set(3, value);
    }

    /**
     * Getter for <code>databasir.database_type.description</code>.
     */
    public String getDescription() {
        return (String) get(3);
    }

    /**
     * Setter for <code>databasir.database_type.jdbc_driver_file_url</code>.
     */
    public void setJdbcDriverFileUrl(String value) {
        set(4, value);
    }

    /**
     * Getter for <code>databasir.database_type.jdbc_driver_file_url</code>.
     */
    public String getJdbcDriverFileUrl() {
        return (String) get(4);
    }

    /**
     * Setter for <code>databasir.database_type.jdbc_driver_class_name</code>.
     */
    public void setJdbcDriverClassName(String value) {
        set(5, value);
    }

    /**
     * Getter for <code>databasir.database_type.jdbc_driver_class_name</code>.
     */
    public String getJdbcDriverClassName() {
        return (String) get(5);
    }

    /**
     * Setter for <code>databasir.database_type.jdbc_protocol</code>.
     */
    public void setJdbcProtocol(String value) {
        set(6, value);
    }

    /**
     * Getter for <code>databasir.database_type.jdbc_protocol</code>.
     */
    public String getJdbcProtocol() {
        return (String) get(6);
    }

    /**
     * Setter for <code>databasir.database_type.url_pattern</code>.
     */
    public void setUrlPattern(String value) {
        set(7, value);
    }

    /**
     * Getter for <code>databasir.database_type.url_pattern</code>.
     */
    public String getUrlPattern() {
        return (String) get(7);
    }

    /**
     * Setter for <code>databasir.database_type.deleted</code>.
     */
    public void setDeleted(Boolean value) {
        set(8, value);
    }

    /**
     * Getter for <code>databasir.database_type.deleted</code>.
     */
    public Boolean getDeleted() {
        return (Boolean) get(8);
    }

    /**
     * Setter for <code>databasir.database_type.deleted_token</code>.
     */
    public void setDeletedToken(Integer value) {
        set(9, value);
    }

    /**
     * Getter for <code>databasir.database_type.deleted_token</code>.
     */
    public Integer getDeletedToken() {
        return (Integer) get(9);
    }

    /**
     * Setter for <code>databasir.database_type.update_at</code>.
     */
    public void setUpdateAt(LocalDateTime value) {
        set(10, value);
    }

    /**
     * Getter for <code>databasir.database_type.update_at</code>.
     */
    public LocalDateTime getUpdateAt() {
        return (LocalDateTime) get(10);
    }

    /**
     * Setter for <code>databasir.database_type.create_at</code>.
     */
    public void setCreateAt(LocalDateTime value) {
        set(11, value);
    }

    /**
     * Getter for <code>databasir.database_type.create_at</code>.
     */
    public LocalDateTime getCreateAt() {
        return (LocalDateTime) get(11);
    }

    // -------------------------------------------------------------------------
    // Primary key information
    // -------------------------------------------------------------------------

    @Override
    public Record1<Integer> key() {
        return (Record1) super.key();
    }

    // -------------------------------------------------------------------------
    // Record12 type implementation
    // -------------------------------------------------------------------------

    @Override
    public Row12<Integer, String, String, String, String, String, String, String, Boolean, Integer, LocalDateTime, LocalDateTime> fieldsRow() {
        return (Row12) super.fieldsRow();
    }

    @Override
    public Row12<Integer, String, String, String, String, String, String, String, Boolean, Integer, LocalDateTime, LocalDateTime> valuesRow() {
        return (Row12) super.valuesRow();
    }

    @Override
    public Field<Integer> field1() {
        return DatabaseType.DATABASE_TYPE.ID;
    }

    @Override
    public Field<String> field2() {
        return DatabaseType.DATABASE_TYPE.DATABASE_TYPE_;
    }

    @Override
    public Field<String> field3() {
        return DatabaseType.DATABASE_TYPE.ICON;
    }

    @Override
    public Field<String> field4() {
        return DatabaseType.DATABASE_TYPE.DESCRIPTION;
    }

    @Override
    public Field<String> field5() {
        return DatabaseType.DATABASE_TYPE.JDBC_DRIVER_FILE_URL;
    }

    @Override
    public Field<String> field6() {
        return DatabaseType.DATABASE_TYPE.JDBC_DRIVER_CLASS_NAME;
    }

    @Override
    public Field<String> field7() {
        return DatabaseType.DATABASE_TYPE.JDBC_PROTOCOL;
    }

    @Override
    public Field<String> field8() {
        return DatabaseType.DATABASE_TYPE.URL_PATTERN;
    }

    @Override
    public Field<Boolean> field9() {
        return DatabaseType.DATABASE_TYPE.DELETED;
    }

    @Override
    public Field<Integer> field10() {
        return DatabaseType.DATABASE_TYPE.DELETED_TOKEN;
    }

    @Override
    public Field<LocalDateTime> field11() {
        return DatabaseType.DATABASE_TYPE.UPDATE_AT;
    }

    @Override
    public Field<LocalDateTime> field12() {
        return DatabaseType.DATABASE_TYPE.CREATE_AT;
    }

    @Override
    public Integer component1() {
        return getId();
    }

    @Override
    public String component2() {
        return getDatabaseType();
    }

    @Override
    public String component3() {
        return getIcon();
    }

    @Override
    public String component4() {
        return getDescription();
    }

    @Override
    public String component5() {
        return getJdbcDriverFileUrl();
    }

    @Override
    public String component6() {
        return getJdbcDriverClassName();
    }

    @Override
    public String component7() {
        return getJdbcProtocol();
    }

    @Override
    public String component8() {
        return getUrlPattern();
    }

    @Override
    public Boolean component9() {
        return getDeleted();
    }

    @Override
    public Integer component10() {
        return getDeletedToken();
    }

    @Override
    public LocalDateTime component11() {
        return getUpdateAt();
    }

    @Override
    public LocalDateTime component12() {
        return getCreateAt();
    }

    @Override
    public Integer value1() {
        return getId();
    }

    @Override
    public String value2() {
        return getDatabaseType();
    }

    @Override
    public String value3() {
        return getIcon();
    }

    @Override
    public String value4() {
        return getDescription();
    }

    @Override
    public String value5() {
        return getJdbcDriverFileUrl();
    }

    @Override
    public String value6() {
        return getJdbcDriverClassName();
    }

    @Override
    public String value7() {
        return getJdbcProtocol();
    }

    @Override
    public String value8() {
        return getUrlPattern();
    }

    @Override
    public Boolean value9() {
        return getDeleted();
    }

    @Override
    public Integer value10() {
        return getDeletedToken();
    }

    @Override
    public LocalDateTime value11() {
        return getUpdateAt();
    }

    @Override
    public LocalDateTime value12() {
        return getCreateAt();
    }

    @Override
    public DatabaseTypeRecord value1(Integer value) {
        setId(value);
        return this;
    }

    @Override
    public DatabaseTypeRecord value2(String value) {
        setDatabaseType(value);
        return this;
    }

    @Override
    public DatabaseTypeRecord value3(String value) {
        setIcon(value);
        return this;
    }

    @Override
    public DatabaseTypeRecord value4(String value) {
        setDescription(value);
        return this;
    }

    @Override
    public DatabaseTypeRecord value5(String value) {
        setJdbcDriverFileUrl(value);
        return this;
    }

    @Override
    public DatabaseTypeRecord value6(String value) {
        setJdbcDriverClassName(value);
        return this;
    }

    @Override
    public DatabaseTypeRecord value7(String value) {
        setJdbcProtocol(value);
        return this;
    }

    @Override
    public DatabaseTypeRecord value8(String value) {
        setUrlPattern(value);
        return this;
    }

    @Override
    public DatabaseTypeRecord value9(Boolean value) {
        setDeleted(value);
        return this;
    }

    @Override
    public DatabaseTypeRecord value10(Integer value) {
        setDeletedToken(value);
        return this;
    }

    @Override
    public DatabaseTypeRecord value11(LocalDateTime value) {
        setUpdateAt(value);
        return this;
    }

    @Override
    public DatabaseTypeRecord value12(LocalDateTime value) {
        setCreateAt(value);
        return this;
    }

    @Override
    public DatabaseTypeRecord values(Integer value1, String value2, String value3, String value4, String value5, String value6, String value7, String value8, Boolean value9, Integer value10, LocalDateTime value11, LocalDateTime value12) {
        value1(value1);
        value2(value2);
        value3(value3);
        value4(value4);
        value5(value5);
        value6(value6);
        value7(value7);
        value8(value8);
        value9(value9);
        value10(value10);
        value11(value11);
        value12(value12);
        return this;
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached DatabaseTypeRecord
     */
    public DatabaseTypeRecord() {
        super(DatabaseType.DATABASE_TYPE);
    }

    /**
     * Create a detached, initialised DatabaseTypeRecord
     */
    public DatabaseTypeRecord(Integer id, String databaseType, String icon, String description, String jdbcDriverFileUrl, String jdbcDriverClassName, String jdbcProtocol, String urlPattern, Boolean deleted, Integer deletedToken, LocalDateTime updateAt, LocalDateTime createAt) {
        super(DatabaseType.DATABASE_TYPE);

        setId(id);
        setDatabaseType(databaseType);
        setIcon(icon);
        setDescription(description);
        setJdbcDriverFileUrl(jdbcDriverFileUrl);
        setJdbcDriverClassName(jdbcDriverClassName);
        setJdbcProtocol(jdbcProtocol);
        setUrlPattern(urlPattern);
        setDeleted(deleted);
        setDeletedToken(deletedToken);
        setUpdateAt(updateAt);
        setCreateAt(createAt);
    }

    /**
     * Create a detached, initialised DatabaseTypeRecord
     */
    public DatabaseTypeRecord(DatabaseTypePojo value) {
        super(DatabaseType.DATABASE_TYPE);

        if (value != null) {
            setId(value.getId());
            setDatabaseType(value.getDatabaseType());
            setIcon(value.getIcon());
            setDescription(value.getDescription());
            setJdbcDriverFileUrl(value.getJdbcDriverFileUrl());
            setJdbcDriverClassName(value.getJdbcDriverClassName());
            setJdbcProtocol(value.getJdbcProtocol());
            setUrlPattern(value.getUrlPattern());
            setDeleted(value.getDeleted());
            setDeletedToken(value.getDeletedToken());
            setUpdateAt(value.getUpdateAt());
            setCreateAt(value.getCreateAt());
        }
    }
}

// https://www.terraform.io/docs/providers/oci/r/data_oci_mysql_mysql_db_systems.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "configuration_id": {
        "type": "string",
        "optional": true
      },
      "db_system_id": {
        "type": "string",
        "optional": true
      },
      "db_systems": {
        "type": [
          "list",
          [
            "object",
            {
              "admin_password": "string",
              "admin_username": "string",
              "availability_domain": "string",
              "backup_policy": [
                "list",
                [
                  "object",
                  {
                    "defined_tags": [
                      "map",
                      "string"
                    ],
                    "freeform_tags": [
                      "map",
                      "string"
                    ],
                    "is_enabled": "bool",
                    "retention_in_days": "number",
                    "window_start_time": "string"
                  }
                ]
              ],
              "compartment_id": "string",
              "configuration_id": "string",
              "data_storage_size_in_gb": "number",
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "display_name": "string",
              "endpoints": [
                "list",
                [
                  "object",
                  {
                    "hostname": "string",
                    "ip_address": "string",
                    "modes": [
                      "list",
                      "string"
                    ],
                    "port": "number",
                    "port_x": "number",
                    "status": "string",
                    "status_details": "string"
                  }
                ]
              ],
              "fault_domain": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "hostname_label": "string",
              "id": "string",
              "ip_address": "string",
              "lifecycle_details": "string",
              "maintenance": [
                "list",
                [
                  "object",
                  {
                    "window_start_time": "string"
                  }
                ]
              ],
              "mysql_version": "string",
              "port": "number",
              "port_x": "number",
              "shape_name": "string",
              "shutdown_type": "string",
              "source": [
                "list",
                [
                  "object",
                  {
                    "backup_id": "string",
                    "source_type": "string"
                  }
                ]
              ],
              "state": "string",
              "subnet_id": "string",
              "time_created": "string",
              "time_updated": "string"
            }
          ]
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_up_to_date": {
        "type": "bool",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciMysqlMysqlDbSystemsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly configurationId?: string;
  readonly dbSystemId?: string;
  readonly displayName?: string;
  readonly isUpToDate?: boolean;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciMysqlMysqlDbSystemsFilter[];
}
export class DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy extends ComplexComputedList {

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // retention_in_days - computed: true, optional: false, required: true
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }

  // window_start_time - computed: true, optional: false, required: true
  public get windowStartTime() {
    return this.getStringAttribute('window_start_time');
  }
}
export class DataOciMysqlMysqlDbSystemsDbSystemsEndpoints extends ComplexComputedList {

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // modes - computed: true, optional: false, required: true
  public get modes() {
    return this.getListAttribute('modes');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_x - computed: true, optional: false, required: true
  public get portX() {
    return this.getNumberAttribute('port_x');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_details - computed: true, optional: false, required: true
  public get statusDetails() {
    return this.getStringAttribute('status_details');
  }
}
export class DataOciMysqlMysqlDbSystemsDbSystemsMaintenance extends ComplexComputedList {

  // window_start_time - computed: true, optional: false, required: true
  public get windowStartTime() {
    return this.getStringAttribute('window_start_time');
  }
}
export class DataOciMysqlMysqlDbSystemsDbSystemsSource extends ComplexComputedList {

  // backup_id - computed: true, optional: false, required: true
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }

  // source_type - computed: true, optional: false, required: true
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}
export class DataOciMysqlMysqlDbSystemsDbSystems extends ComplexComputedList {

  // admin_password - computed: true, optional: false, required: true
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // admin_username - computed: true, optional: false, required: true
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_policy - computed: true, optional: false, required: true
  public get backupPolicy() {
    return 'not implemented' as any;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configuration_id - computed: true, optional: false, required: true
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }

  // data_storage_size_in_gb - computed: true, optional: false, required: true
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // endpoints - computed: true, optional: false, required: true
  public get endpoints() {
    return 'not implemented' as any;
  }

  // fault_domain - computed: true, optional: false, required: true
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // hostname_label - computed: true, optional: false, required: true
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance - computed: true, optional: false, required: true
  public get maintenance() {
    return 'not implemented' as any;
  }

  // mysql_version - computed: true, optional: false, required: true
  public get mysqlVersion() {
    return this.getStringAttribute('mysql_version');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_x - computed: true, optional: false, required: true
  public get portX() {
    return this.getNumberAttribute('port_x');
  }

  // shape_name - computed: true, optional: false, required: true
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // shutdown_type - computed: true, optional: false, required: true
  public get shutdownType() {
    return this.getStringAttribute('shutdown_type');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return 'not implemented' as any;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}
export interface DataOciMysqlMysqlDbSystemsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMysqlMysqlDbSystems extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMysqlMysqlDbSystemsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_mysql_db_systems',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._configurationId = config.configurationId;
    this._dbSystemId = config.dbSystemId;
    this._displayName = config.displayName;
    this._isUpToDate = config.isUpToDate;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // configuration_id - computed: false, optional: true, required: false
  private _configurationId?: string;
  public get configurationId() {
    return this._configurationId;
  }
  public set configurationId(value: string | undefined) {
    this._configurationId = value;
  }

  // db_system_id - computed: false, optional: true, required: false
  private _dbSystemId?: string;
  public get dbSystemId() {
    return this._dbSystemId;
  }
  public set dbSystemId(value: string | undefined) {
    this._dbSystemId = value;
  }

  // db_systems - computed: true, optional: false, required: true
  public dbSystems(index: string) {
    return new DataOciMysqlMysqlDbSystemsDbSystems(this, 'db_systems', index);
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_up_to_date - computed: false, optional: true, required: false
  private _isUpToDate?: boolean;
  public get isUpToDate() {
    return this._isUpToDate;
  }
  public set isUpToDate(value: boolean | undefined) {
    this._isUpToDate = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMysqlMysqlDbSystemsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMysqlMysqlDbSystemsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      configuration_id: this._configurationId,
      db_system_id: this._dbSystemId,
      display_name: this._displayName,
      is_up_to_date: this._isUpToDate,
      state: this._state,
      filter: this._filter,
    };
  }
}

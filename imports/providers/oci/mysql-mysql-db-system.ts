// https://www.terraform.io/docs/providers/oci/r/mysql_mysql_db_system.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "admin_password": {
        "type": "string",
        "required": true,
        "sensitive": true
      },
      "admin_username": {
        "type": "string",
        "required": true
      },
      "availability_domain": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "configuration_id": {
        "type": "string",
        "required": true
      },
      "data_storage_size_in_gb": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "endpoints": {
        "type": [
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
        "computed": true
      },
      "fault_domain": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "hostname_label": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_address": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "mysql_version": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "port_x": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "shape_name": {
        "type": "string",
        "required": true
      },
      "shutdown_type": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "backup_policy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "defined_tags": {
              "type": [
                "map",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "freeform_tags": {
              "type": [
                "map",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "is_enabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "retention_in_days": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "window_start_time": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "maintenance": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "window_start_time": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "source": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "backup_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "source_type": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface MysqlMysqlDbSystemConfig extends TerraformMetaArguments {
  readonly adminPassword: string;
  readonly adminUsername: string;
  readonly availabilityDomain: string;
  readonly compartmentId: string;
  readonly configurationId: string;
  readonly dataStorageSizeInGb?: number;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly displayName?: string;
  readonly faultDomain?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly hostnameLabel?: string;
  readonly ipAddress?: string;
  readonly mysqlVersion?: string;
  readonly port?: number;
  readonly portX?: number;
  readonly shapeName: string;
  readonly shutdownType?: string;
  readonly state?: string;
  readonly subnetId: string;
  /** backup_policy block */
  readonly backupPolicy?: MysqlMysqlDbSystemBackupPolicy[];
  /** maintenance block */
  readonly maintenance?: MysqlMysqlDbSystemMaintenance[];
  /** source block */
  readonly source?: MysqlMysqlDbSystemSource[];
  /** timeouts block */
  readonly timeouts?: MysqlMysqlDbSystemTimeouts;
}
export class MysqlMysqlDbSystemEndpoints extends ComplexComputedList {

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
export interface MysqlMysqlDbSystemBackupPolicy {
  readonly definedTags?: { [key: string]: string };
  readonly freeformTags?: { [key: string]: string };
  readonly isEnabled?: boolean;
  readonly retentionInDays?: number;
  readonly windowStartTime?: string;
}
export interface MysqlMysqlDbSystemMaintenance {
  readonly windowStartTime: string;
}
export interface MysqlMysqlDbSystemSource {
  readonly backupId?: string;
  readonly sourceType: string;
}
export interface MysqlMysqlDbSystemTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class MysqlMysqlDbSystem extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MysqlMysqlDbSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_mysql_db_system',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminPassword = config.adminPassword;
    this._adminUsername = config.adminUsername;
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._configurationId = config.configurationId;
    this._dataStorageSizeInGb = config.dataStorageSizeInGb;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._faultDomain = config.faultDomain;
    this._freeformTags = config.freeformTags;
    this._hostnameLabel = config.hostnameLabel;
    this._ipAddress = config.ipAddress;
    this._mysqlVersion = config.mysqlVersion;
    this._port = config.port;
    this._portX = config.portX;
    this._shapeName = config.shapeName;
    this._shutdownType = config.shutdownType;
    this._state = config.state;
    this._subnetId = config.subnetId;
    this._backupPolicy = config.backupPolicy;
    this._maintenance = config.maintenance;
    this._source = config.source;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword: string;
  public get adminPassword() {
    return this._adminPassword;
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername: string;
  public get adminUsername() {
    return this._adminUsername;
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // configuration_id - computed: false, optional: false, required: true
  private _configurationId: string;
  public get configurationId() {
    return this._configurationId;
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }

  // data_storage_size_in_gb - computed: true, optional: true, required: false
  private _dataStorageSizeInGb?: number;
  public get dataStorageSizeInGb() {
    return this._dataStorageSizeInGb ?? this.getNumberAttribute('data_storage_size_in_gb');
  }
  public set dataStorageSizeInGb(value: number | undefined) {
    this._dataStorageSizeInGb = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // endpoints - computed: true, optional: false, required: true
  public endpoints(index: string) {
    return new MysqlMysqlDbSystemEndpoints(this, 'endpoints', index);
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string;
  public get faultDomain() {
    return this._faultDomain ?? this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string | undefined) {
    this._faultDomain = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // hostname_label - computed: true, optional: true, required: false
  private _hostnameLabel?: string;
  public get hostnameLabel() {
    return this._hostnameLabel ?? this.getStringAttribute('hostname_label');
  }
  public set hostnameLabel(value: string | undefined) {
    this._hostnameLabel = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this._ipAddress ?? this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // mysql_version - computed: true, optional: true, required: false
  private _mysqlVersion?: string;
  public get mysqlVersion() {
    return this._mysqlVersion ?? this.getStringAttribute('mysql_version');
  }
  public set mysqlVersion(value: string | undefined) {
    this._mysqlVersion = value;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port ?? this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // port_x - computed: true, optional: true, required: false
  private _portX?: number;
  public get portX() {
    return this._portX ?? this.getNumberAttribute('port_x');
  }
  public set portX(value: number | undefined) {
    this._portX = value;
  }

  // shape_name - computed: false, optional: false, required: true
  private _shapeName: string;
  public get shapeName() {
    return this._shapeName;
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }

  // shutdown_type - computed: false, optional: true, required: false
  private _shutdownType?: string;
  public get shutdownType() {
    return this._shutdownType;
  }
  public set shutdownType(value: string | undefined) {
    this._shutdownType = value;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state ?? this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy?: MysqlMysqlDbSystemBackupPolicy[];
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public set backupPolicy(value: MysqlMysqlDbSystemBackupPolicy[] | undefined) {
    this._backupPolicy = value;
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance?: MysqlMysqlDbSystemMaintenance[];
  public get maintenance() {
    return this._maintenance;
  }
  public set maintenance(value: MysqlMysqlDbSystemMaintenance[] | undefined) {
    this._maintenance = value;
  }

  // source - computed: false, optional: true, required: false
  private _source?: MysqlMysqlDbSystemSource[];
  public get source() {
    return this._source;
  }
  public set source(value: MysqlMysqlDbSystemSource[] | undefined) {
    this._source = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MysqlMysqlDbSystemTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MysqlMysqlDbSystemTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: this._adminPassword,
      admin_username: this._adminUsername,
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      configuration_id: this._configurationId,
      data_storage_size_in_gb: this._dataStorageSizeInGb,
      defined_tags: this._definedTags,
      description: this._description,
      display_name: this._displayName,
      fault_domain: this._faultDomain,
      freeform_tags: this._freeformTags,
      hostname_label: this._hostnameLabel,
      ip_address: this._ipAddress,
      mysql_version: this._mysqlVersion,
      port: this._port,
      port_x: this._portX,
      shape_name: this._shapeName,
      shutdown_type: this._shutdownType,
      state: this._state,
      subnet_id: this._subnetId,
      backup_policy: this._backupPolicy,
      maintenance: this._maintenance,
      source: this._source,
      timeouts: this._timeouts,
    };
  }
}

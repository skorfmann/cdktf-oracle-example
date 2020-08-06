// https://www.terraform.io/docs/providers/oci/r/data_oci_mysql_mysql_db_system.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "admin_password": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "admin_username": {
        "type": "string",
        "computed": true
      },
      "availability_domain": {
        "type": "string",
        "computed": true
      },
      "backup_policy": {
        "type": [
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
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "configuration_id": {
        "type": "string",
        "computed": true
      },
      "data_storage_size_in_gb": {
        "type": "number",
        "computed": true
      },
      "db_system_id": {
        "type": "string",
        "required": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
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
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "hostname_label": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "ip_address": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "maintenance": {
        "type": [
          "list",
          [
            "object",
            {
              "window_start_time": "string"
            }
          ]
        ],
        "computed": true
      },
      "mysql_version": {
        "type": "string",
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "port_x": {
        "type": "number",
        "computed": true
      },
      "shape_name": {
        "type": "string",
        "computed": true
      },
      "shutdown_type": {
        "type": "string",
        "computed": true
      },
      "source": {
        "type": [
          "list",
          [
            "object",
            {
              "backup_id": "string",
              "source_type": "string"
            }
          ]
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataOciMysqlMysqlDbSystemConfig extends TerraformMetaArguments {
  readonly dbSystemId: string;
}
export class DataOciMysqlMysqlDbSystemBackupPolicy extends ComplexComputedList {

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
export class DataOciMysqlMysqlDbSystemEndpoints extends ComplexComputedList {

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
export class DataOciMysqlMysqlDbSystemMaintenance extends ComplexComputedList {

  // window_start_time - computed: true, optional: false, required: true
  public get windowStartTime() {
    return this.getStringAttribute('window_start_time');
  }
}
export class DataOciMysqlMysqlDbSystemSource extends ComplexComputedList {

  // backup_id - computed: true, optional: false, required: true
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }

  // source_type - computed: true, optional: false, required: true
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

// Resource

export class DataOciMysqlMysqlDbSystem extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMysqlMysqlDbSystemConfig) {
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
    this._dbSystemId = config.dbSystemId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public backupPolicy(index: string) {
    return new DataOciMysqlMysqlDbSystemBackupPolicy(this, 'backup_policy', index);
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

  // db_system_id - computed: false, optional: false, required: true
  private _dbSystemId: string;
  public get dbSystemId() {
    return this._dbSystemId;
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
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
  public endpoints(index: string) {
    return new DataOciMysqlMysqlDbSystemEndpoints(this, 'endpoints', index);
  }

  // fault_domain - computed: true, optional: false, required: true
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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
  public maintenance(index: string) {
    return new DataOciMysqlMysqlDbSystemMaintenance(this, 'maintenance', index);
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
  public source(index: string) {
    return new DataOciMysqlMysqlDbSystemSource(this, 'source', index);
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_system_id: this._dbSystemId,
    };
  }
}

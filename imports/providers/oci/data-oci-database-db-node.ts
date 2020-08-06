// https://www.terraform.io/docs/providers/oci/r/data_oci_database_db_node.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "additional_details": {
        "type": "string",
        "computed": true
      },
      "backup_vnic_id": {
        "type": "string",
        "computed": true
      },
      "db_node_id": {
        "type": "string",
        "required": true
      },
      "db_system_id": {
        "type": "string",
        "computed": true
      },
      "fault_domain": {
        "type": "string",
        "computed": true
      },
      "hostname": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "maintenance_type": {
        "type": "string",
        "computed": true
      },
      "software_storage_size_in_gb": {
        "type": "number",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_maintenance_window_end": {
        "type": "string",
        "computed": true
      },
      "time_maintenance_window_start": {
        "type": "string",
        "computed": true
      },
      "vnic_id": {
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

// Configuration

export interface DataOciDatabaseDbNodeConfig extends TerraformMetaArguments {
  readonly dbNodeId: string;
}

// Resource

export class DataOciDatabaseDbNode extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_node',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbNodeId = config.dbNodeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_details - computed: true, optional: false, required: true
  public get additionalDetails() {
    return this.getStringAttribute('additional_details');
  }

  // backup_vnic_id - computed: true, optional: false, required: true
  public get backupVnicId() {
    return this.getStringAttribute('backup_vnic_id');
  }

  // db_node_id - computed: false, optional: false, required: true
  private _dbNodeId: string;
  public get dbNodeId() {
    return this._dbNodeId;
  }
  public set dbNodeId(value: string) {
    this._dbNodeId = value;
  }

  // db_system_id - computed: true, optional: false, required: true
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // fault_domain - computed: true, optional: false, required: true
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // maintenance_type - computed: true, optional: false, required: true
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // software_storage_size_in_gb - computed: true, optional: false, required: true
  public get softwareStorageSizeInGb() {
    return this.getNumberAttribute('software_storage_size_in_gb');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_maintenance_window_end - computed: true, optional: false, required: true
  public get timeMaintenanceWindowEnd() {
    return this.getStringAttribute('time_maintenance_window_end');
  }

  // time_maintenance_window_start - computed: true, optional: false, required: true
  public get timeMaintenanceWindowStart() {
    return this.getStringAttribute('time_maintenance_window_start');
  }

  // vnic_id - computed: true, optional: false, required: true
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_node_id: this._dbNodeId,
    };
  }
}

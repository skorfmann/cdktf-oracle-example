// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_vm_cluster.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_vm_cluster_id": {
        "type": "string",
        "required": true
      },
      "available_cpus": {
        "type": "number",
        "computed": true
      },
      "available_data_storage_size_in_tbs": {
        "type": "number",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "cpus_enabled": {
        "type": "number",
        "computed": true
      },
      "data_storage_size_in_tbs": {
        "type": "number",
        "computed": true
      },
      "db_node_storage_size_in_gbs": {
        "type": "number",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "exadata_infrastructure_id": {
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
      "id": {
        "type": "string",
        "computed": true
      },
      "is_local_backup_enabled": {
        "type": "bool",
        "computed": true
      },
      "license_model": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "memory_size_in_gbs": {
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
      "time_zone": {
        "type": "string",
        "computed": true
      },
      "vm_cluster_network_id": {
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
import { StringMap } from "cdktf";

// Configuration

export interface DataOciDatabaseAutonomousVmClusterConfig extends TerraformMetaArguments {
  readonly autonomousVmClusterId: string;
}

// Resource

export class DataOciDatabaseAutonomousVmCluster extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousVmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_vm_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autonomousVmClusterId = config.autonomousVmClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_vm_cluster_id - computed: false, optional: false, required: true
  private _autonomousVmClusterId: string;
  public get autonomousVmClusterId() {
    return this._autonomousVmClusterId;
  }
  public set autonomousVmClusterId(value: string) {
    this._autonomousVmClusterId = value;
  }

  // available_cpus - computed: true, optional: false, required: true
  public get availableCpus() {
    return this.getNumberAttribute('available_cpus');
  }

  // available_data_storage_size_in_tbs - computed: true, optional: false, required: true
  public get availableDataStorageSizeInTbs() {
    return this.getNumberAttribute('available_data_storage_size_in_tbs');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpus_enabled - computed: true, optional: false, required: true
  public get cpusEnabled() {
    return this.getNumberAttribute('cpus_enabled');
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: true
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: true
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // exadata_infrastructure_id - computed: true, optional: false, required: true
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_local_backup_enabled - computed: true, optional: false, required: true
  public get isLocalBackupEnabled() {
    return this.getBooleanAttribute('is_local_backup_enabled');
  }

  // license_model - computed: true, optional: false, required: true
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: true
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: false, required: true
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // vm_cluster_network_id - computed: true, optional: false, required: true
  public get vmClusterNetworkId() {
    return this.getStringAttribute('vm_cluster_network_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_vm_cluster_id: this._autonomousVmClusterId,
    };
  }
}

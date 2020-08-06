// https://www.terraform.io/docs/providers/oci/r/data_oci_bds_bds_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bds_instance_id": {
        "type": "string",
        "required": true
      },
      "cloud_sql_details": {
        "type": [
          "list",
          [
            "object",
            {
              "block_volume_size_in_gbs": "string",
              "ip_address": "string",
              "is_kerberos_mapped_to_database_users": "bool",
              "kerberos_details": [
                "list",
                [
                  "object",
                  {
                    "keytab_file": "string",
                    "principal_name": "string"
                  }
                ]
              ],
              "shape": "string"
            }
          ]
        ],
        "computed": true
      },
      "cluster_admin_password": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "cluster_details": {
        "type": [
          "list",
          [
            "object",
            {
              "bd_cell_version": "string",
              "bda_version": "string",
              "bdm_version": "string",
              "bds_version": "string",
              "big_data_manager_url": "string",
              "cloudera_manager_url": "string",
              "csql_cell_version": "string",
              "db_version": "string",
              "hue_server_url": "string",
              "os_version": "string",
              "time_created": "string",
              "time_refreshed": "string"
            }
          ]
        ],
        "computed": true
      },
      "cluster_public_key": {
        "type": "string",
        "computed": true
      },
      "cluster_version": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "created_by": {
        "type": "string",
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
      "is_cloud_sql_configured": {
        "type": "bool",
        "computed": true
      },
      "is_high_availability": {
        "type": "bool",
        "computed": true
      },
      "is_secure": {
        "type": "bool",
        "computed": true
      },
      "master_node": {
        "type": [
          "list",
          [
            "object",
            {
              "block_volume_size_in_gbs": "string",
              "number_of_nodes": "number",
              "shape": "string",
              "subnet_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "network_config": {
        "type": [
          "list",
          [
            "object",
            {
              "cidr_block": "string",
              "is_nat_gateway_required": "bool"
            }
          ]
        ],
        "computed": true
      },
      "nodes": {
        "type": [
          "list",
          [
            "object",
            {
              "attached_block_volumes": [
                "list",
                [
                  "object",
                  {
                    "volume_attachment_id": "string",
                    "volume_size_in_gbs": "string"
                  }
                ]
              ],
              "availability_domain": "string",
              "display_name": "string",
              "fault_domain": "string",
              "image_id": "string",
              "instance_id": "string",
              "ip_address": "string",
              "node_type": "string",
              "shape": "string",
              "ssh_fingerprint": "string",
              "state": "string",
              "subnet_id": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "number_of_nodes": {
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
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "util_node": {
        "type": [
          "list",
          [
            "object",
            {
              "block_volume_size_in_gbs": "string",
              "number_of_nodes": "number",
              "shape": "string",
              "subnet_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "worker_node": {
        "type": [
          "list",
          [
            "object",
            {
              "block_volume_size_in_gbs": "string",
              "number_of_nodes": "number",
              "shape": "string",
              "subnet_id": "string"
            }
          ]
        ],
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

export interface DataOciBdsBdsInstanceConfig extends TerraformMetaArguments {
  readonly bdsInstanceId: string;
}
export class DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails extends ComplexComputedList {

  // keytab_file - computed: true, optional: false, required: true
  public get keytabFile() {
    return this.getStringAttribute('keytab_file');
  }

  // principal_name - computed: true, optional: false, required: true
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }
}
export class DataOciBdsBdsInstanceCloudSqlDetails extends ComplexComputedList {

  // block_volume_size_in_gbs - computed: true, optional: false, required: true
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_kerberos_mapped_to_database_users - computed: true, optional: false, required: true
  public get isKerberosMappedToDatabaseUsers() {
    return this.getBooleanAttribute('is_kerberos_mapped_to_database_users');
  }

  // kerberos_details - computed: true, optional: false, required: true
  public get kerberosDetails() {
    return 'not implemented' as any;
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }
}
export class DataOciBdsBdsInstanceClusterDetails extends ComplexComputedList {

  // bd_cell_version - computed: true, optional: false, required: true
  public get bdCellVersion() {
    return this.getStringAttribute('bd_cell_version');
  }

  // bda_version - computed: true, optional: false, required: true
  public get bdaVersion() {
    return this.getStringAttribute('bda_version');
  }

  // bdm_version - computed: true, optional: false, required: true
  public get bdmVersion() {
    return this.getStringAttribute('bdm_version');
  }

  // bds_version - computed: true, optional: false, required: true
  public get bdsVersion() {
    return this.getStringAttribute('bds_version');
  }

  // big_data_manager_url - computed: true, optional: false, required: true
  public get bigDataManagerUrl() {
    return this.getStringAttribute('big_data_manager_url');
  }

  // cloudera_manager_url - computed: true, optional: false, required: true
  public get clouderaManagerUrl() {
    return this.getStringAttribute('cloudera_manager_url');
  }

  // csql_cell_version - computed: true, optional: false, required: true
  public get csqlCellVersion() {
    return this.getStringAttribute('csql_cell_version');
  }

  // db_version - computed: true, optional: false, required: true
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // hue_server_url - computed: true, optional: false, required: true
  public get hueServerUrl() {
    return this.getStringAttribute('hue_server_url');
  }

  // os_version - computed: true, optional: false, required: true
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_refreshed - computed: true, optional: false, required: true
  public get timeRefreshed() {
    return this.getStringAttribute('time_refreshed');
  }
}
export class DataOciBdsBdsInstanceMasterNode extends ComplexComputedList {

  // block_volume_size_in_gbs - computed: true, optional: false, required: true
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // number_of_nodes - computed: true, optional: false, required: true
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciBdsBdsInstanceNetworkConfig extends ComplexComputedList {

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // is_nat_gateway_required - computed: true, optional: false, required: true
  public get isNatGatewayRequired() {
    return this.getBooleanAttribute('is_nat_gateway_required');
  }
}
export class DataOciBdsBdsInstanceNodesAttachedBlockVolumes extends ComplexComputedList {

  // volume_attachment_id - computed: true, optional: false, required: true
  public get volumeAttachmentId() {
    return this.getStringAttribute('volume_attachment_id');
  }

  // volume_size_in_gbs - computed: true, optional: false, required: true
  public get volumeSizeInGbs() {
    return this.getStringAttribute('volume_size_in_gbs');
  }
}
export class DataOciBdsBdsInstanceNodes extends ComplexComputedList {

  // attached_block_volumes - computed: true, optional: false, required: true
  public get attachedBlockVolumes() {
    return 'not implemented' as any;
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fault_domain - computed: true, optional: false, required: true
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_id - computed: true, optional: false, required: true
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // node_type - computed: true, optional: false, required: true
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // ssh_fingerprint - computed: true, optional: false, required: true
  public get sshFingerprint() {
    return this.getStringAttribute('ssh_fingerprint');
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
}
export class DataOciBdsBdsInstanceUtilNode extends ComplexComputedList {

  // block_volume_size_in_gbs - computed: true, optional: false, required: true
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // number_of_nodes - computed: true, optional: false, required: true
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciBdsBdsInstanceWorkerNode extends ComplexComputedList {

  // block_volume_size_in_gbs - computed: true, optional: false, required: true
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // number_of_nodes - computed: true, optional: false, required: true
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

// Resource

export class DataOciBdsBdsInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciBdsBdsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bdsInstanceId = config.bdsInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId: string;
  public get bdsInstanceId() {
    return this._bdsInstanceId;
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }

  // cloud_sql_details - computed: true, optional: false, required: true
  public cloudSqlDetails(index: string) {
    return new DataOciBdsBdsInstanceCloudSqlDetails(this, 'cloud_sql_details', index);
  }

  // cluster_admin_password - computed: true, optional: false, required: true
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }

  // cluster_details - computed: true, optional: false, required: true
  public clusterDetails(index: string) {
    return new DataOciBdsBdsInstanceClusterDetails(this, 'cluster_details', index);
  }

  // cluster_public_key - computed: true, optional: false, required: true
  public get clusterPublicKey() {
    return this.getStringAttribute('cluster_public_key');
  }

  // cluster_version - computed: true, optional: false, required: true
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: true
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_cloud_sql_configured - computed: true, optional: false, required: true
  public get isCloudSqlConfigured() {
    return this.getBooleanAttribute('is_cloud_sql_configured');
  }

  // is_high_availability - computed: true, optional: false, required: true
  public get isHighAvailability() {
    return this.getBooleanAttribute('is_high_availability');
  }

  // is_secure - computed: true, optional: false, required: true
  public get isSecure() {
    return this.getBooleanAttribute('is_secure');
  }

  // master_node - computed: true, optional: false, required: true
  public masterNode(index: string) {
    return new DataOciBdsBdsInstanceMasterNode(this, 'master_node', index);
  }

  // network_config - computed: true, optional: false, required: true
  public networkConfig(index: string) {
    return new DataOciBdsBdsInstanceNetworkConfig(this, 'network_config', index);
  }

  // nodes - computed: true, optional: false, required: true
  public nodes(index: string) {
    return new DataOciBdsBdsInstanceNodes(this, 'nodes', index);
  }

  // number_of_nodes - computed: true, optional: false, required: true
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // util_node - computed: true, optional: false, required: true
  public utilNode(index: string) {
    return new DataOciBdsBdsInstanceUtilNode(this, 'util_node', index);
  }

  // worker_node - computed: true, optional: false, required: true
  public workerNode(index: string) {
    return new DataOciBdsBdsInstanceWorkerNode(this, 'worker_node', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bds_instance_id: this._bdsInstanceId,
    };
  }
}

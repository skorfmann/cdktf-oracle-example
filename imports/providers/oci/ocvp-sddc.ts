// https://www.terraform.io/docs/providers/oci/r/ocvp_sddc.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "actual_esxi_hosts_count": {
        "type": "number",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "compute_availability_domain": {
        "type": "string",
        "required": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "esxi_hosts_count": {
        "type": "number",
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_display_name_prefix": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "nsx_edge_uplink1vlan_id": {
        "type": "string",
        "required": true
      },
      "nsx_edge_uplink2vlan_id": {
        "type": "string",
        "required": true
      },
      "nsx_edge_uplink_ip_id": {
        "type": "string",
        "computed": true
      },
      "nsx_edge_vtep_vlan_id": {
        "type": "string",
        "required": true
      },
      "nsx_manager_fqdn": {
        "type": "string",
        "computed": true
      },
      "nsx_manager_initial_password": {
        "type": "string",
        "computed": true
      },
      "nsx_manager_private_ip_id": {
        "type": "string",
        "computed": true
      },
      "nsx_manager_username": {
        "type": "string",
        "computed": true
      },
      "nsx_overlay_segment_name": {
        "type": "string",
        "computed": true
      },
      "nsx_vtep_vlan_id": {
        "type": "string",
        "required": true
      },
      "provisioning_subnet_id": {
        "type": "string",
        "required": true
      },
      "ssh_authorized_keys": {
        "type": "string",
        "required": true
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
      "vcenter_fqdn": {
        "type": "string",
        "computed": true
      },
      "vcenter_initial_password": {
        "type": "string",
        "computed": true
      },
      "vcenter_private_ip_id": {
        "type": "string",
        "computed": true
      },
      "vcenter_username": {
        "type": "string",
        "computed": true
      },
      "vmotion_vlan_id": {
        "type": "string",
        "required": true
      },
      "vmware_software_version": {
        "type": "string",
        "required": true
      },
      "vsan_vlan_id": {
        "type": "string",
        "required": true
      },
      "vsphere_vlan_id": {
        "type": "string",
        "required": true
      },
      "workload_network_cidr": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
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

// Configuration

export interface OcvpSddcConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly computeAvailabilityDomain: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly esxiHostsCount: number;
  readonly freeformTags?: { [key: string]: string };
  readonly instanceDisplayNamePrefix?: string;
  readonly nsxEdgeUplink1VlanId: string;
  readonly nsxEdgeUplink2VlanId: string;
  readonly nsxEdgeVtepVlanId: string;
  readonly nsxVtepVlanId: string;
  readonly provisioningSubnetId: string;
  readonly sshAuthorizedKeys: string;
  readonly vmotionVlanId: string;
  readonly vmwareSoftwareVersion: string;
  readonly vsanVlanId: string;
  readonly vsphereVlanId: string;
  readonly workloadNetworkCidr?: string;
  /** timeouts block */
  readonly timeouts?: OcvpSddcTimeouts;
}
export interface OcvpSddcTimeouts {
  readonly create?: string;
}

// Resource

export class OcvpSddc extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OcvpSddcConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_sddc',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._computeAvailabilityDomain = config.computeAvailabilityDomain;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._esxiHostsCount = config.esxiHostsCount;
    this._freeformTags = config.freeformTags;
    this._instanceDisplayNamePrefix = config.instanceDisplayNamePrefix;
    this._nsxEdgeUplink1VlanId = config.nsxEdgeUplink1VlanId;
    this._nsxEdgeUplink2VlanId = config.nsxEdgeUplink2VlanId;
    this._nsxEdgeVtepVlanId = config.nsxEdgeVtepVlanId;
    this._nsxVtepVlanId = config.nsxVtepVlanId;
    this._provisioningSubnetId = config.provisioningSubnetId;
    this._sshAuthorizedKeys = config.sshAuthorizedKeys;
    this._vmotionVlanId = config.vmotionVlanId;
    this._vmwareSoftwareVersion = config.vmwareSoftwareVersion;
    this._vsanVlanId = config.vsanVlanId;
    this._vsphereVlanId = config.vsphereVlanId;
    this._workloadNetworkCidr = config.workloadNetworkCidr;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_esxi_hosts_count - computed: true, optional: false, required: true
  public get actualEsxiHostsCount() {
    return this.getNumberAttribute('actual_esxi_hosts_count');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // compute_availability_domain - computed: false, optional: false, required: true
  private _computeAvailabilityDomain: string;
  public get computeAvailabilityDomain() {
    return this._computeAvailabilityDomain;
  }
  public set computeAvailabilityDomain(value: string) {
    this._computeAvailabilityDomain = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // esxi_hosts_count - computed: false, optional: false, required: true
  private _esxiHostsCount: number;
  public get esxiHostsCount() {
    return this._esxiHostsCount;
  }
  public set esxiHostsCount(value: number) {
    this._esxiHostsCount = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_display_name_prefix - computed: true, optional: true, required: false
  private _instanceDisplayNamePrefix?: string;
  public get instanceDisplayNamePrefix() {
    return this._instanceDisplayNamePrefix ?? this.getStringAttribute('instance_display_name_prefix');
  }
  public set instanceDisplayNamePrefix(value: string | undefined) {
    this._instanceDisplayNamePrefix = value;
  }

  // nsx_edge_uplink1vlan_id - computed: false, optional: false, required: true
  private _nsxEdgeUplink1VlanId: string;
  public get nsxEdgeUplink1VlanId() {
    return this._nsxEdgeUplink1VlanId;
  }
  public set nsxEdgeUplink1VlanId(value: string) {
    this._nsxEdgeUplink1VlanId = value;
  }

  // nsx_edge_uplink2vlan_id - computed: false, optional: false, required: true
  private _nsxEdgeUplink2VlanId: string;
  public get nsxEdgeUplink2VlanId() {
    return this._nsxEdgeUplink2VlanId;
  }
  public set nsxEdgeUplink2VlanId(value: string) {
    this._nsxEdgeUplink2VlanId = value;
  }

  // nsx_edge_uplink_ip_id - computed: true, optional: false, required: true
  public get nsxEdgeUplinkIpId() {
    return this.getStringAttribute('nsx_edge_uplink_ip_id');
  }

  // nsx_edge_vtep_vlan_id - computed: false, optional: false, required: true
  private _nsxEdgeVtepVlanId: string;
  public get nsxEdgeVtepVlanId() {
    return this._nsxEdgeVtepVlanId;
  }
  public set nsxEdgeVtepVlanId(value: string) {
    this._nsxEdgeVtepVlanId = value;
  }

  // nsx_manager_fqdn - computed: true, optional: false, required: true
  public get nsxManagerFqdn() {
    return this.getStringAttribute('nsx_manager_fqdn');
  }

  // nsx_manager_initial_password - computed: true, optional: false, required: true
  public get nsxManagerInitialPassword() {
    return this.getStringAttribute('nsx_manager_initial_password');
  }

  // nsx_manager_private_ip_id - computed: true, optional: false, required: true
  public get nsxManagerPrivateIpId() {
    return this.getStringAttribute('nsx_manager_private_ip_id');
  }

  // nsx_manager_username - computed: true, optional: false, required: true
  public get nsxManagerUsername() {
    return this.getStringAttribute('nsx_manager_username');
  }

  // nsx_overlay_segment_name - computed: true, optional: false, required: true
  public get nsxOverlaySegmentName() {
    return this.getStringAttribute('nsx_overlay_segment_name');
  }

  // nsx_vtep_vlan_id - computed: false, optional: false, required: true
  private _nsxVtepVlanId: string;
  public get nsxVtepVlanId() {
    return this._nsxVtepVlanId;
  }
  public set nsxVtepVlanId(value: string) {
    this._nsxVtepVlanId = value;
  }

  // provisioning_subnet_id - computed: false, optional: false, required: true
  private _provisioningSubnetId: string;
  public get provisioningSubnetId() {
    return this._provisioningSubnetId;
  }
  public set provisioningSubnetId(value: string) {
    this._provisioningSubnetId = value;
  }

  // ssh_authorized_keys - computed: false, optional: false, required: true
  private _sshAuthorizedKeys: string;
  public get sshAuthorizedKeys() {
    return this._sshAuthorizedKeys;
  }
  public set sshAuthorizedKeys(value: string) {
    this._sshAuthorizedKeys = value;
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

  // vcenter_fqdn - computed: true, optional: false, required: true
  public get vcenterFqdn() {
    return this.getStringAttribute('vcenter_fqdn');
  }

  // vcenter_initial_password - computed: true, optional: false, required: true
  public get vcenterInitialPassword() {
    return this.getStringAttribute('vcenter_initial_password');
  }

  // vcenter_private_ip_id - computed: true, optional: false, required: true
  public get vcenterPrivateIpId() {
    return this.getStringAttribute('vcenter_private_ip_id');
  }

  // vcenter_username - computed: true, optional: false, required: true
  public get vcenterUsername() {
    return this.getStringAttribute('vcenter_username');
  }

  // vmotion_vlan_id - computed: false, optional: false, required: true
  private _vmotionVlanId: string;
  public get vmotionVlanId() {
    return this._vmotionVlanId;
  }
  public set vmotionVlanId(value: string) {
    this._vmotionVlanId = value;
  }

  // vmware_software_version - computed: false, optional: false, required: true
  private _vmwareSoftwareVersion: string;
  public get vmwareSoftwareVersion() {
    return this._vmwareSoftwareVersion;
  }
  public set vmwareSoftwareVersion(value: string) {
    this._vmwareSoftwareVersion = value;
  }

  // vsan_vlan_id - computed: false, optional: false, required: true
  private _vsanVlanId: string;
  public get vsanVlanId() {
    return this._vsanVlanId;
  }
  public set vsanVlanId(value: string) {
    this._vsanVlanId = value;
  }

  // vsphere_vlan_id - computed: false, optional: false, required: true
  private _vsphereVlanId: string;
  public get vsphereVlanId() {
    return this._vsphereVlanId;
  }
  public set vsphereVlanId(value: string) {
    this._vsphereVlanId = value;
  }

  // workload_network_cidr - computed: true, optional: true, required: false
  private _workloadNetworkCidr?: string;
  public get workloadNetworkCidr() {
    return this._workloadNetworkCidr ?? this.getStringAttribute('workload_network_cidr');
  }
  public set workloadNetworkCidr(value: string | undefined) {
    this._workloadNetworkCidr = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OcvpSddcTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: OcvpSddcTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      compute_availability_domain: this._computeAvailabilityDomain,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      esxi_hosts_count: this._esxiHostsCount,
      freeform_tags: this._freeformTags,
      instance_display_name_prefix: this._instanceDisplayNamePrefix,
      nsx_edge_uplink1vlan_id: this._nsxEdgeUplink1VlanId,
      nsx_edge_uplink2vlan_id: this._nsxEdgeUplink2VlanId,
      nsx_edge_vtep_vlan_id: this._nsxEdgeVtepVlanId,
      nsx_vtep_vlan_id: this._nsxVtepVlanId,
      provisioning_subnet_id: this._provisioningSubnetId,
      ssh_authorized_keys: this._sshAuthorizedKeys,
      vmotion_vlan_id: this._vmotionVlanId,
      vmware_software_version: this._vmwareSoftwareVersion,
      vsan_vlan_id: this._vsanVlanId,
      vsphere_vlan_id: this._vsphereVlanId,
      workload_network_cidr: this._workloadNetworkCidr,
      timeouts: this._timeouts,
    };
  }
}
